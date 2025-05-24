
import { signOut } from 'firebase/auth'; // Função de logout do Firebase Authentication
import { useNavigate } from 'react-router-dom'; // Hook de navegação
import { auth } from '../../firebaseConfig'; // Configuração do Firebase
import './logon.css'; // Estilização do botão de logout

/**
 * Componente LogoutButton
 *
 * Renderiza um botão para o usuário sair da conta atual.
 * Ao clicar, o usuário é deslogado do Firebase Auth e redirecionado para a tela inicial ("/").
 *
 * @returns {JSX.Element} Botão funcional de logout
 */
const LogoutButton = () => {
  const navigate = useNavigate(); // Hook usado para redirecionar após o logout

  /**
   * Função chamada ao clicar no botão de logout.
   * - Faz o signOut do usuário com Firebase Auth
   * - Redireciona para a página inicial
   */
  const handleLogout = async () => {
    try {
      await signOut(auth); // Realiza o logout no Firebase
      navigate('/'); // Redireciona para a home
    } catch (error) {
      console.error('Erro ao sair da conta:', error); // Loga erro no console
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      {/* Ícone visual + texto do botão */}
      <span className="logout-icon">↻</span> Sair dessa conta
    </button>
  );
};

export default LogoutButton;
