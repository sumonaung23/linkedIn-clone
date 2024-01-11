import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig';

const LoginAPI = (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch(err) {
        return err
    }
}

export default LoginAPI