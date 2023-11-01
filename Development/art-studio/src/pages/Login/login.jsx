import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import dbRegistration from '../../configs/registration_config';
import './login.css';

function Login() {
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

      if (result.user) {
        setNotification('Login berhasil!'); // Set notifikasi login berhasil
        const registrationData = {
            name: result.user.displayName,
            email: result.user.email,
        };
        const registrationsCollection = collection(dbRegistration, 'registrations'); // Ubah ini
        await addDoc(registrationsCollection, registrationData);

        // mengalihkan pengguna ke halaman registrationPage.jsx
        navigate('/registration');
      }
    } catch (error) {
      console.error('Google login error:', error);
    }
  }
  return (
    <div className="login">
        <h2>Login with Google</h2>
        <button onClick={handleGoogleLogin}>Login with Google</button>
        <div className="notif">
            {notification && <div className="login-notif">{notification}</div>}
        </div>
    </div>
  );
}

export default Login;
