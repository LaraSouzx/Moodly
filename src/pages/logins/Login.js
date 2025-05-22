import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"; // Login com conta Google
import '../logins/style.css'; // Estilização da tela de login
import logo from '../../assets/logo.png'; // Logo da aplicação
import LoginForm from '../../components/formulario/LoginForm'; // Formulário de login por e-mail/senha

/**
 * Componente Login
 *
 * Renderiza a tela de login principal com:
 * - Branding (logo e frase motivacional)
 * - Formulário tradicional de login (e-mail/senha)
 * - (Opcional) Lógica para login com conta Google
 *
 * @returns {JSX.Element} Tela de login do usuário
 */
function Login() {

  /**
   * loginGoogle (não usado diretamente neste JSX)
   * Função opcional para autenticação com conta Google via Firebase.
   */
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider(); // Provedor de login do Google
    try {
      const result = await signInWithPopup(auth, provider); // Login popup com Firebase Auth
      console.log("Usuário logado: ", result.user);
    } catch (error) {
      console.error("erro ao logar: ", error);
    }
  };

  return (
    <div className="login-container">
      {/* Seção visual com logo e frase motivacional */}
      <div className="fundo-verde">
        <img src={logo} alt="Logo" className="logo-img" />
        <h3 className="frase">
          Registre seu dia, entenda suas emoções, <br /> viva com mais leveza.
        </h3>
      </div>

      {/* Formulário funcional de login */}
      <LoginForm />
    </div>
  );
}

export default Login;
