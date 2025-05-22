import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

function Logout({user}){
    return(
        <>
        <h2>olá, {user.displayName}</h2>
        <button onClick={() => signOut(auth)}>
            Sair
        </button>
        </>
    );
}