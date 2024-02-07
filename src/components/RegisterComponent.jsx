import { useState } from "react"
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI"
import LinkedInLogo from '../assets/linkedInLogo.png';
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";

import '../Sass/LoginComponent.scss'
import { toast } from "react-toastify";

const RegisterComponent = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const login = async () => {
        try {
            let res = await RegisterAPI(credentials.email, credentials.password);
            toast.success('Account Created!');
        }
        catch (err) {
            toast.error('Cannot create your account!');
        }
    };

    const googleSignIn = async () => {
        try {
            let response = await GoogleSignInAPI();
            console.log(response);
        } catch (err) {
            console.error("Error signing in with Google:", err);
            // Handle the error appropriately, e.g., show an error message to the user.
        }
    }
    

    return (
        <div className="login_wrapper">
            <img src={LinkedInLogo} alt="LinkedInLogo" className="linkedinLogo" />

            <div className="login_wrapper-inner">
                <h1 className="heading">Make the most of your professional life</h1>

                <div className="auth-inputs">
                    <input 
                        onChange={(e) => 
                        setCredentials({ ...credentials, email: e.target.value})
                        } 
                        className="common-input"
                        placeholder="Email or Phone Number" 
                    />
                    <input 
                        onChange={(e) => 
                            setCredentials({ ...credentials, password: e.target.value})
                        }
                        className="common-input"
                        placeholder="Password (6 or more characters)"
                    />
                </div>
                <button onClick={login} className="login-btn" >
                    Agree & Join
                </button>
            </div>
            
            <hr className='hr-text' data-content="OR" />

            <div className="googleBtn-container">
                <GoogleButton
                    className="google-btn"
                    onClick={googleSignIn}
                />

                <p className="signup">
                    Already on LinkedIn? <span className="join-now" onClick={() => navigate('/login')}>Sign in</span>
                </p>
            </div>
        </div>
    )
}

export default RegisterComponent