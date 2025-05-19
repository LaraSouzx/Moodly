import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import '../logins/style.css';
import logo from '../../assets/logo.png';
import LoginForm from '../../components/formulario/LoginForm';

function Login(){
    const loginGoogle = async () => {
        //instanciando um novo provedor de autenticação do google
        const provider = new GoogleAuthProvider();

        try{
            const result = await signInWithPopup(auth, provider);
            console.log("Usuário logado: ", result.user);
        } catch(error){
            console.error("erro ao logar: ", error);
        }
    }

    return(
    <div className="login-container">
        <div className="fundo-verde">
             <img src={logo} alt="Logo" className="logo-img"/>
             <h3 className="frase">Registre seu dia, entenda suas emoções, <br/> viva com mais leveza.</h3>
        </div>
         <LoginForm />
        
    </div>
    );
}



export default Login;