import React, { useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navigasi from '../../components/Navigasi/navigasi';
import './login.css';

function Login() {
  const navigate = useNavigate();

  // menentukan tindakan komponen
  useEffect(() => {
    const auth = getAuth(); // otentikasi pengguna dengan firebase
    // onAuthStateChanged untuk melihat status login user
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // mengalihkan ke halaman registrasi
        navigate('/registration');
      }
    });

    return () => unsubscribe(); // menghentikan otentikasi
  }, [navigate]);

  // handle untuk tombol login Google
  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider(); // otentikasi Google
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Google login error:', error);
    }
  }

  return (
    <>
      <Navigasi />
      <div className="login">
        <h2>Login with Google</h2>
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>
    </>
  );
}

export default Login;