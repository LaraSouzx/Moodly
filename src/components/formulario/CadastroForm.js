import react from "react";
import { Link } from 'react-router-dom';
import '../formulario/style.css';
import './cadastro.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

/**
 * Componente CadastroForm
 *
 * Exibe um formulário de cadastro com campos para nome, e-mail e senha.
 * Ao submeter, cria uma conta no Firebase Auth e armazena o nome e e-mail no Firestore.
 *
 * @returns {JSX.Element} Formulário de criação de conta
 */
export default function CadastroForm() {
  // Estados controlados para os campos e mensagens
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  /**
   * Função responsável por realizar o cadastro do usuário
   * - Cria usuário no Firebase Authentication
   * - Salva nome e e-mail no Firestore
   */
  const handleCadastro = async () => {
    setErro(""); // Limpa mensagens anteriores
    setSucesso("");
    try {
      // Cria o usuário no Firebase Auth com email e senha
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Salva o nome e email no Firestore na coleção 'usuarios'
      await setDoc(doc(db, "usuarios", user.uid), {
        nome: nome,
        email: email
      });

      // Mensagem de sucesso e limpeza dos campos
      setSucesso("Usuário cadastrado com sucesso!");
      setEmail("");
      setSenha("");
      setNome(""); // limpa o nome também
    } catch (error) {
      // Em caso de erro, exibe mensagem
      setErro(error.message);
    }
  };

  return (
    <div className="cadastro-wrapper">
      <div className="cadastro-box">
        <div className="cadastro-form">
          <div className="cadastro-header">
            <h2>Crie sua conta</h2>
            <p>É de graça e fácil</p>
          </div>

          {/* Campo para o nome do usuário */}
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          {/* Campo de e-mail */}
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite um e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Campo de senha */}
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite uma senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>

        {/* Botão que dispara o cadastro */}
        <button className="cadastro-button" onClick={handleCadastro}>Cadastrar</button>

        {/* Mensagens de erro ou sucesso */}
        {erro && <div className="alert erro-alert">{erro}</div>}
        {sucesso && <div className="alert sucesso-alert">{sucesso}</div>}

        {/* Link para login caso o usuário já tenha conta */}
        <div className="login-footer">
          <span className="text-muted">Já tem uma conta? </span>
          <Link to="/" className="text-link">Entre agora</Link>
        </div>
      </div>
    </div>
  );
}
