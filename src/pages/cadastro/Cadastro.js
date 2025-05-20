import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import '../logins/style.css';
import logo from '../../assets/logo.png';
import CadastroForm from '../../components/formulario/CadastroForm';

function Cadastro(){
    return(
    <div className="login-container">
        <div className="fundo-verde">
             <img src={logo} alt="Logo" className="logo-img"/>
             <h3 className="frase">Registre seu dia, entenda suas emoções, <br/> viva com mais leveza.</h3>
        </div>
         <CadastroForm />
        
    </div>
    );
}



export default Cadastro;