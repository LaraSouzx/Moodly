import { Link } from 'react-router-dom';
import '../formulario/style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { googleProvider } from '../../firebaseConfig';
import googleIcon from '../../assets/icon-google.png';


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () =>{
      try{
        await signInWithEmailAndPassword(auth, email, senha);
        navigate('/dashboard');
        setSucesso("Usuário cadastrado com sucesso!");
      }catch(error){
        setErro("E-mail ou senha inválidos.");
        console.error(error);
      }
    }

    const handleGoogleLogin = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
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

          <div className="form-group">
            <label>E-mail</label>
            <input type="email" 
              placeholder="Digite seu e-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>

                {erro && <p style={{ color: 'red' }}>{erro}</p>}
                {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}

        <button className="signup-button" onClick={handleLogin}>Entre</button>

        <div className="divider">
          <hr />
          <span>ou faça login com outras contas</span>
          <hr />
        </div>

        <div className="social-login">
          <button className="google-login-button" onClick={handleGoogleLogin}>
            <img src= {googleIcon} alt="Google" style={{ width: 20, marginRight: 8 }} />
            Entrar com Google
          </button>
        </div>

        <div className="login-footer">
          <span className="text-muted">Ainda não tem uma conta? </span>
          <Link to="/cadastro" className="text-link">Crie agora</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
