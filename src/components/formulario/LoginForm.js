import { Link } from 'react-router-dom';
import '../formulario/style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebaseConfig';
import googleIcon from '../../assets/icon-google.png';

/**
 * Componente LoginForm
 *
 * Exibe um formulário de login com suporte a:
 * - Autenticação por e-mail e senha
 * - Login via conta Google (Firebase Authentication)
 *
 * Após o login, redireciona o usuário para a rota "/dashboard".
 *
 * @returns {JSX.Element} Formulário de login com integração ao Firebase
 */
const LoginForm = () => {
  // Estados para capturar valores e mensagens do usuário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const navigate = useNavigate(); // Hook para redirecionar o usuário

  /**
   * Faz login com e-mail e senha usando Firebase Authentication.
   * Redireciona para /dashboard em caso de sucesso.
   */
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/dashboard'); // Redireciona após login
      setSucesso("Usuário cadastrado com sucesso!");
    } catch (error) {
      setErro("E-mail ou senha inválidos."); // Exibe erro genérico
      console.error(error); // Log do erro para desenvolvedores
    }
  };

  /**
   * Realiza login com a conta do Google via Firebase.
   * Redireciona para /dashboard se o login for bem-sucedido.
   */
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider); // Autentica com o popup do Google
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
      setErro('Falha no login com Google');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-form">
          <div className="login-header">
            <h2>Entre na sua conta</h2>
            <p>É de graça e fácil</p>
          </div>

          {/* Campo de e-mail */}
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Campo de senha */}
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>

        {/* Mensagens de feedback */}
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}

        {/* Botão de login tradicional */}
        <button className="signup-button" onClick={handleLogin}>Entre</button>

        {/* Divisor visual */}
        <div className="divider">
          <hr />
          <span>ou faça login com outras contas</span>
          <hr />
        </div>

        {/* Botão de login com Google */}
        <div className="social-login">
          <button className="google-login-button" onClick={handleGoogleLogin}>
            <img src={googleIcon} alt="Google" style={{ width: 20, marginRight: 8 }} />
            Entrar com Google
          </button>
        </div>

        {/* Link para página de cadastro */}
        <div className="login-footer">
          <span className="text-muted">Ainda não tem uma conta? </span>
          <Link to="/cadastro" className="text-link">Crie agora</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
