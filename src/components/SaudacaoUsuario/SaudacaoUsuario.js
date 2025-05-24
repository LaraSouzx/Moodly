import { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './style.css';

/**
 * Componente SaudacaoUsuario
 *
 * Exibe uma saudação personalizada com o nome do usuário logado.
 * O nome é obtido da coleção "usuarios" no Firestore com base no ID do usuário autenticado.
 *
 * @returns {JSX.Element} Saudação com o nome do usuário (ou "usuário" como fallback)
 */
export function SaudacaoUsuario() {
  const [nome, setNome] = useState(""); // Estado para armazenar o nome do usuário

  useEffect(() => {
    /**
     * Busca o nome do usuário no Firestore a partir do UID atual
     */
    const buscarNome = async () => {
      const user = auth.currentUser; // Obtém o usuário autenticado
      if (user) {
        const docRef = doc(db, "usuarios", user.uid); // Referência ao documento do usuário
        const docSnap = await getDoc(docRef); // Busca os dados do Firestore
        if (docSnap.exists()) {
          setNome(docSnap.data().nome); // Atualiza o estado com o nome
        }
      }
    };

    buscarNome(); // Executa a busca ao montar o componente
  }, []);

  return (
    <div className="usuario-saudacao">
      {/* Saudação com fallback caso o nome ainda não esteja carregado */}
      <h2>Olá, {nome || "usuário"}!</h2>
    </div>
  );
}
