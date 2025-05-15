import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth/web-extension";

function Login(){
    const loginGoogle = async () => {
        //instanciando um novo provedor de autenticação do google
        const provider = new GoogleAuthProvider();

        try{
            const result = await signInWithPopup(auth, provider);
            console.log("Usuário logado: ", result.user);
        } catch(error){
            console.error("erro ao logar: ", erro);
        }
    }
}

return(
    <div>
        <h2> Login </h2>
        <button onClick={loginGoogle}>Entrar com google</button>
    </div>
);

export default Login;