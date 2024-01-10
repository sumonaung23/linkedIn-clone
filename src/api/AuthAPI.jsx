import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig';

const LoginAPI = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
}

export default LoginAPI