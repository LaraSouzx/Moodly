import '../logins/style.css'; // Estilo da tela de login/cadastro
import logo from '../../assets/logo.png'; // Logo da aplicação
import CadastroForm from '../../components/formulario/CadastroForm'; // Componente de formulário de cadastro

/**
 * Componente Cadastro
 *
 * Tela visual de cadastro contendo:
 * - Um lado com branding (logo e frase motivacional)
 * - Um formulário de cadastro para criação de conta
 *
 * @returns {JSX.Element} Interface de tela de cadastro
 */
function Cadastro() {
  return (
    <div className="login-container">
      {/* Seção visual com logo e frase */}
      <div className="fundo-verde">
        <img src={logo} alt="Logo" className="logo-img" />
        <h3 className="frase">
          Registre seu dia, entenda suas emoções, <br /> viva com mais leveza.
        </h3>
      </div>

      {/* Formulário funcional de cadastro */}
      <CadastroForm />
    </div>
  );
}

export default Cadastro;
