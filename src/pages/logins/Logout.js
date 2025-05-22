import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

/**
 * Componente Logout
 *
 * Exibe uma saudação com o nome do usuário e um botão para encerrar a sessão.
 * Ao clicar em "Sair", o usuário é deslogado via Firebase Authentication.
 *
 * @param {object} user - Objeto do usuário autenticado (contendo displayName, etc.)
 * @returns {JSX.Element} Saudação + botão de logout
 */
function Logout({ user }) {
  return (
    <>
      {/* Saudação personalizada com o nome do usuário */}
      <h2>Olá, {user.displayName}</h2>

      {/* Botão que chama signOut para encerrar a sessão */}
      <button onClick={() => signOut(auth)}>
        Sair
      </button>
    </>
  );
}

export default Logout; // Exporta o componente para uso externo
