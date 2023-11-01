import React, { useState, useEffect } from 'react';
import './registrationPage.css';
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import db from '../../configs/registration_config';
import Navigasi from '../../components/Navigasi/navigasi';

function Registration() {

  // inisial data form
  const initialFormState = {
    name: '',
    email: '',
    address: '',
    phone: '',
    guardianName: '',
    guardianPhone: '',
    course: '',
  };
  
  // untuk mengelola data di form
  const [formData, setFormData] = useState(initialFormState);

  // untuk mengelola pesan error di input
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    guardianName: '',
    guardianPhone: '',
    course: '',
  });

  // handle untuk perubahan data
  const handleFormChange = (e) => {
    const { id, value } = e.target;
  
    // Set data sesuai dengan mode edit atau tambah data
    if (editMode) {
      setEditData({ ...editData, [id]: value });
  
      // Validasi di mode edit
      const errors = { ...errorMessages };
  
      if (id === 'name') {
        if (value.length < 5 || /[^a-zA-Z\s]/.test(value)) {
          errors.name = "Student name must be at least 5 characters long and must not contain symbols.";
        } else {
          errors.name = '';
        }
      }
  
      if (id === 'guardianName') {
        if (value.length < 5 || /[^a-zA-Z\s]/.test(value)) {
          errors.guardianName = "Guardian's name must be at least 5 characters long and must not contain symbols.";
        } else {
          errors.guardianName = '';
        }
      }
  
      if (id === 'email') {
        if (!value.includes('@')) {
          errors.email = "Invalid email.";
        } else {
          errors.email = '';
        }
      }
  
      if (id === 'address') {
        if (!value) {
          errors.address = "Please fill in your address.";
        } else {
          errors.address = '';
        }
      }
  
      if (id === 'course') {
        if (!value) {
          errors.course = "Please select a course.";
        } else {
          errors.course = '';
        }
      }
  
      if (id === 'phone') {
        if (!/^\d+$/.test(value)) {
          errors.phone = "Phone number can only contain numbers.";
        } else {
          errors.phone = '';
        }
      }
  
      if (id === 'guardianPhone') {
        if (!/^\d+$/.test(value)) {
          errors.guardianPhone = "Guardian's phone number can only contain numbers.";
        } else {
          errors.guardianPhone = '';
        }
      }
  
      // mengatur pesan error sesuai dengan inputnya
      setErrorMessages(errors);
    } else {
      // update data di mode tambah data
      setFormData({ ...formData, [id]: value });
  
      // Reset pesan error saat datanya valid
      if (errorMessages[id]) {
        setErrorMessages({ ...errorMessages, [id]: '' });
      }
    }
  };    

  // validasi field form ketika menambah data baru
  const validateForm = () => {
    const errors = {};
  
    if (!editMode && (formData.name.length < 5 || /[^a-zA-Z\s]/.test(formData.name))) {
      errors.name = "Student name must be at least 5 characters long and must not contain symbols.";
    }
  
    if (!editMode && (formData.guardianName.length < 5 || /[^a-zA-Z\s]/.test(formData.guardianName))) {
      errors.guardianName = "Guardian's name must be at least 5 characters long and must not contain symbols.";
    }
  
    if (!editMode && !formData.email.includes('@')) {
      errors.email = "Invalid email.";
    }
  
    if (!editMode && !formData.address) {
      errors.address = "Please fill in your address.";
    }
  
    if (!editMode && !formData.course) {
      errors.course = "Please select a course.";
    }
  
    if (!editMode && !/^\d+$/.test(formData.phone)) {
      errors.phone = "Phone number can only contain numbers.";
    }
  
    if (!editMode && !/^\d+$/.test(formData.guardianPhone)) {
      errors.guardianPhone = "Guardian's phone number can only contain numbers.";
    }
  
    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };  

  const [registrations, setRegistrations] = useState([]); // untuk menyimpan data ke database
  const [regisSuccessAlert, setRegisSuccessAlert] = useState(false); // untuk menampilkan alert berhasil mendaftar
  const [updateSuccessAlert, setUpdateSuccessAlert] = useState(false); // untuk berhasil update data (edit)

  // handle ketika submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const valid = validateForm();
  
    if (valid) {
      try {
        if (editMode) {
          // Edit untuk memperbarui data database
          await updateDoc(doc(db, 'registrations', editData.id), editData);
          console.log('Data updated in database');
  
          // Reset state editData setelah berhasil mengedit
          setEditData({ ...formData });
          // Menampilkan alert setelah berhasil update data
          setUpdateSuccessAlert(true);

        } else {
          // Add untuk menambahkan data baru ke database
          await addDoc(collection(db, 'registrations'), formData);
          console.log('Data saved to database');

          // Menampilkan alert setelah berhasil mendaftar
          setRegisSuccessAlert(true);
        }
  
        // Reset state formulir setelah mengirim
        setFormData(initialFormState);
        setEditMode(false);
      } catch (error) {
        console.error('Error saving/updating data to database: ', error);
      }
    }
  };

  // untuk mengatur waktu tampil alert
  useEffect(() => {
    if (regisSuccessAlert || updateSuccessAlert) {
      // menampilkan alert selama 5 detik
      const timeoutId = setTimeout(() => {
        setRegisSuccessAlert(false);
        setUpdateSuccessAlert(false);
      }, 3000);

      return () => {
        // menutup alert saat timed out
        clearTimeout(timeoutId);
      };
    }
  }, [regisSuccessAlert, updateSuccessAlert]);

  // untuk menonaktifkan tombol submit ketika data tidak valid
  const hasErrors = () => {
    return Object.values(errorMessages).some((message) => message !== '');
  };

  // Mengambil data dari database saat komponen disubmit
  useEffect(() => {
    const registrationRef = collection(db, 'registrations'); // koneksi ke database
  
    // menampilkan data yg disubmit (ketika add ataupun edit)
    const unsubscribe = onSnapshot(registrationRef, (querySnapshot) => {
      const registrationData = [];
      querySnapshot.forEach((doc) => {
        registrationData.push({ id: doc.id, ...doc.data() });
      });
      setRegistrations(registrationData); //memperbarui state
    });
  
    return unsubscribe;
  }, []);  
  
  // handle untuk delete data di database
  const handleDelete = async (registrationId) => {
    try {
      // Hapus data dengan id tertentu
      await deleteDoc(doc(db, 'registrations', registrationId));
      console.log('Data deleted from database');

      // Memperbarui state registrations setelah delete
      setRegistrations((prevRegistrations) =>
        prevRegistrations.filter((registration) => registration.id !== registrationId)
      );
    } catch (error) {
      console.error('Error deleting data from database: ', error);
    }
  };
  
  // untuk mengetahui status komponen sedang di mode edit atau tambah data
  const [editMode, setEditMode] = useState(false);

  // untuk mengelola data yang diedit di mode edit
  const [editData, setEditData] = useState({ ...formData });

  // handle untuk edit data
  const handleEdit = (registration) => {
    setEditMode(true);
    setEditData(registration);

    setErrorMessages({}); //mengosongkan validasi field
  };

  // handle untuk cancel edit data
  const handleCancel = () => {
    if (editMode) {
      // Mengosongkan kembali field form dan menonaktifkan mode edit
      setFormData(initialFormState);
      setEditMode(false); // keluar dari edit mode

      setErrorMessages({});
    }
  };  

  return(
    <>
      <Navigasi/>
      <div>
          <h2>Registration <span>Form</span></h2>
      </div>

      <div className="registration">
        <div className="registration-group">
          <h5>Join Us Now</h5>

          {/* handle semua field form dengan onSubmit */}
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name" id="name">Name</label>
              <div className="regis-error">
                <input type="text" id="name" value={editMode ? editData.name : formData.name} placeholder="Your name" onChange={handleFormChange}/>
                {/* errorMessages untuk validasi */}
                {errorMessages.name && <div className="error-message">{errorMessages.name}</div>} 
              </div>
            </div>
            <div>
              <label htmlFor="email" id="email">Email</label>
              <div className="regis-error">
                <input type="email" id="email" value={editMode ? editData.email : formData.email} placeholder="Your email" onChange={handleFormChange}/>
                {errorMessages.email && <div className="error-message">{errorMessages.email}</div>}
              </div>
            </div>
            <div>
              <label htmlFor="address" id="address">Address</label>
              <div className="regis-error">
                <input type="text" id="address" value={editMode ? editData.address : formData.address} placeholder="Your address" onChange={handleFormChange}/>
                {errorMessages.address && <div className="error-message">{errorMessages.address}</div>}
              </div>
            </div>
            <div>
              <label htmlFor="phone" id="phone">Phone Number</label>
              <div className="regis-error">
                <input type="text" id="phone" value={editMode ? editData.phone : formData.phone} placeholder="Your phone number" onChange={handleFormChange}/>
                {errorMessages.phone && <div className="error-message">{errorMessages.phone}</div>}
              </div>
            </div>
            <div>
              <label htmlFor="guardianName" id="guardianName">Guardian’s Name</label>
              <div className="regis-error">
                <input type="text" id="guardianName" value={editMode ? editData.guardianName : formData.guardianName} placeholder="Your guardian's name" onChange={handleFormChange}/>
                {errorMessages.guardianName && <div className="error-message">{errorMessages.guardianName}</div>}
              </div>
            </div>
            <div>
              <label htmlFor="guardianPhone" id="guardianPhone">Guardian’s Phone Number</label>
              <div className="regis-error">
                <input type="text" id="guardianPhone" value={editMode ? editData.guardianPhone : formData.guardianPhone} placeholder="Your guardian's phone number" onChange={handleFormChange}/>
                {errorMessages.guardianPhone && <div className="error-message">{errorMessages.guardianPhone}</div>}
              </div>
            </div>
            <div className="course">
              <label htmlFor="course">Course</label>
              <div className="regis-error">
                <select id="course" value={editMode ? editData.course : formData.course} name="course" onChange={handleFormChange} disabled={editMode}>
                  <option value="" disabled hidden></option>
                  <option value="Painting - Naturalism">Painting - Naturalism</option>
                  <option value="Painting - Expressionism">Painting - Expressionism</option>
                  <option value="Music - Guitar">Music - Guitar</option>
                  <option value="Music - Drum">Music - Drum</option>
                  <option value="Dance - Ballet">Dance - Ballet</option>
                  <option value="Dance - Hip-Hop">Dance - Hip-Hop</option>
                </select>
                {errorMessages.course && <div className="error-message">{errorMessages.course}</div>}
              </div>
            </div>
            <div className="form-button">
              <button type="submit" disabled={hasErrors()}>Submit</button>
              {editMode && (
                <div className="cancelButton">
                  <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
              )}
            </div>
            <div className="alert">
              {regisSuccessAlert && (
                <div className="enroll-alert">
                  Thank you for enrolling in our course!
                </div>
              )}
              {updateSuccessAlert && (
                <div className="update-alert">
                  Data updated successfully!
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="registration-group2">
          <h5>Your Registration</h5>
          <div>
            <table>
              <tbody>
                {/* react fragmen untuk maping/mengulang elemen data berdasarkan id */}
                {registrations.map((registration) => (
                <React.Fragment key={registration.id}>
                  <div className="regis-table">
                    <tr>
                      <th>Name :</th>
                      <td>{registration.name}</td>
                    </tr>
                    <tr>
                      <th>Email :</th>
                      <td>{registration.email}</td>
                    </tr>
                    <tr>
                      <th>Address :</th>
                      <td>{registration.address}</td>
                    </tr>
                    <tr>
                      <th>Phone Number :</th>
                      <td>{registration.phone}</td>
                    </tr>
                    <tr>
                      <th>Guardian's Name</th>
                      <td>{registration.guardianName}</td>
                    </tr>
                    <tr>
                      <th>Guardian's Phone Number :</th>
                      <td>{registration.guardianPhone}</td>
                    </tr>
                    <tr>
                      <th>Course</th>
                      <td>{registration.course}</td>
                    </tr>
                  </div>
                  <tr>
                    <td colSpan="2">
                      <div className="registration-button">
                        <button id="deleteButton" onClick={() => handleDelete(registration.id)}>Delete</button>
                        <button id="editButton" onClick={() => handleEdit(registration)}>Edit</button>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration;