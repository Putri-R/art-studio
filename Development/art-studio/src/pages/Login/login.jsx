import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navigasi from '../../components/Navigasi/navigasi';
import './login.css';

function Login() {
  // state mengelola notifikasi setelah login
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
        // fungsi firebase authentication untuk login dengan Google
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

      if (result.user) {
        setNotification('Login successful!'); // Set notifikasi login berhasil

        // mengalihkan pengguna ke halaman registrationPage.jsx
        navigate('/registration');
      }
    } catch (error) {
      console.error('Google login error:', error);
    }
  }
  return (
    <>
    <Navigasi/>
    <div className="login">
        <h2>Login with Google</h2>
        <button onClick={handleGoogleLogin}>Login with Google</button>
        <div className="notif">
            {notification && <div className="login-notif">{notification}</div>}
        </div>
    </div>
    </>
  );
}

export default Login;
