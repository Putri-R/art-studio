import React, { useState, useEffect } from 'react';
import dbTestimony from '../../configs/firebase_config';
import { collection, getDocs } from 'firebase/firestore';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './testimoni.css';

const Testimony = () => {
    const [testimonies, setTestimonies] = useState([]);

    // untuk mengelola state dan interaksi dengan database
    useEffect(() => {
        //mengambil data dari database testimoni dengan geDocs
        const fetchTestimonies = async () => {
            const collectionRef = collection(dbTestimony, 'testimoni');
        const querySnapshot = await getDocs(collectionRef);

        // memperbarui state dengan array data
        const testimoniesArray = [];
        querySnapshot.forEach((doc) => {
            testimoniesArray.push(doc.data());
        });

        // mengubah nilai state
        setTestimonies(testimoniesArray);
        };

        // mengambil data dari database saat ada perubahan
        fetchTestimonies();
    }, []);

    // membagi testimoni untuk carousel menjadi 2 perkelompok
    const testimonialsGroups = [];
    for (let i = 0; i < testimonies.length; i += 2) {
        const group = testimonies.slice(i, i + 2);
        testimonialsGroups.push(group);
    }

    return (
        <div className="testimony">
            <div className="testimony-group">
                <p>Testimonials</p>
                <h2>What students say about <span>Us</span> ?</h2>
            </div>
        
            {/* interval null untuk slide manual */}
            <Carousel interval={null}>
                {/* mengambil data dari testimonialsGroups */}
                {testimonialsGroups.map((group, groupIndex) => (
                // menampilkan tiap 1 slide terdiri dari 2 komponen
                <Carousel.Item key={groupIndex}>
                    <div className="d-flex justify-content-between">
                        <div className="testimony-item">
                            <h3>{group[0].Name}</h3>
                            <p>{group[0].Course}</p>
                            <h6>{group[0].Testimoni}</h6>
                        </div>
                    </div>
                    
                    {/* mengecek jumlah testimoni di database */}
                    <div className="d-flex justify-content-between">
                        {/* menampilkan data di slide yg sama jika jumlah data > 1 */}
                        {group.length > 1 && (
                            <div className="testimony-item">
                                <h3>{group[1].Name}</h3>
                                <p>{group[1].Course}</p>
                                <h6>{group[1].Testimoni}</h6>
                            </div>
                        )}
                    </div>
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );  
};

export default Testimony;