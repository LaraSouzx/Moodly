import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './style.css';

export function SaudacaoUsuario() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    const buscarNome = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNome(docSnap.data().nome);
        }
      }
    };

    buscarNome();
  }, []);

  return (
    <div className="usuario-saudacao">
      <h2>Olá, {nome || "usuário"}!</h2>
    </div>
  );
}
