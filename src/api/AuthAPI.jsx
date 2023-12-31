import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
let auth = getAuth();

const LoginAPI = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
}

export default LoginAPI