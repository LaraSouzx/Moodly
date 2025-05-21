import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import './logon.css'; 

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Erro ao sair da conta:', error);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      <span className="logout-icon">↻</span> Sair dessa conta
    </button>
  );
};

export default LogoutButton;
