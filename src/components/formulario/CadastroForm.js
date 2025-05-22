import react from "react";
import { Link } from 'react-router-dom';
import '../formulario/style.css';
import './cadastro.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";


export default function CadastroForm(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] =useState("");
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleCadastro = async () => {
      setErro("");
      setSucesso("");
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        // Salvar o nome no Firestore
        await setDoc(doc(db, "usuarios", user.uid), {
          nome: nome,
          email: email
        });

        setSucesso("Usuário cadastrado com sucesso!");
        setEmail("");
        setSenha("");
        setNome(""); // limpa o nome também
      } catch (error) {
        setErro(error.message);
      }
};


    return(
        <div className="cadastro-wrapper">
             <div className="cadastro-box">
               <div className="cadastro-form">
                 <div className="cadastro-header">
                   <h2>Crie sua conta</h2>
                   <p>É de graça e fácil</p>
                 </div>
       
                <div className="form-group">
                  <label>Nome</label>
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>

                 <div className="form-group">
                   <label>E-mail</label>
                   <input type="email" placeholder="Digite um e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                 </div>
       
                 <div className="form-group">
                   <label>Senha</label>
                   <input type="password" placeholder="Digite uma senha"  value={senha} onChange={(e) => setSenha(e.target.value)}/>
                 </div>
               </div>
               
               <button className="cadastro-button" onClick={handleCadastro}>Cadastrar</button>

                {erro && <div className="alert erro-alert">{erro}</div>}
                {sucesso && <div className="alert sucesso-alert">{sucesso}</div>}

               <div className="login-footer">
                 <span className="text-muted">Já tem uma conta? </span>
                 <Link to="/" className="text-link">Entre agora</Link>
               </div>
             </div>
           </div>
    );
}