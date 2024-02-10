import LoginComponent from '../components/LoginComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if(!res?.accessToken){
                navigate('/')
            }
        } )
    }, []);

    return (
        <div className='login'>
            <LoginComponent />
        </div>
    )
}

export default Login