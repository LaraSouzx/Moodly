import react from "react";
import { Link } from 'react-router-dom';
import '../formulario/style.css';
import './cadastro.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function CadastroForm(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] =useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleCadastro = async ()=> {
    setErro("");
    setSucesso("");
    try{
      await createUserWithEmailAndPassword(auth, email, senha);
      setSucesso("Usuário cadastrado com sucesso!");
      setEmail("");
      setSenha("")
    }catch(error){
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
                   <label>E-mail</label>
                   <input type="email" placeholder="Digite um e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                 </div>
       
                 <div className="form-group">
                   <label>Senha</label>
                   <input type="password" placeholder="Digite uma senha"  value={senha} onChange={(e) => setSenha(e.target.value)}/>
                 </div>
               </div>
       
               <button className="cadastro-button" onClick={handleCadastro}>Cadastrar</button>

                {erro && <p style={{ color: 'red' }}>{erro}</p>}
                {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}
       
               <div className="login-footer">
                 <span className="text-muted">Já tem uma conta? </span>
                 <Link to="/" className="text-link">Entre agora</Link>
               </div>
             </div>
           </div>
    );
}