import { useState } from "react"
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI"
import LinkedInLogo from '../assets/linkedInLogo.png';
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";

import '../Sass/LoginComponent.scss'
import { toast } from "react-toastify";

const LoginComponent = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const login = async () => {
        try {
            let res = await LoginAPI(credentials.email, credentials.password);
            toast.success('Signed In to LinkedIn!');
        }
        catch (err) {
            toast.error('Please check your credentials!');
        }
    };

    /* const googleSignIn = () => {
        let response = GoogleSignInAPI();
        console.log(response);
    } */

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
                <h1 className="heading">Sign in</h1>
                <p className="sub-heading">Stay updated on your professional world</p>

                <div className="auth-inputs">
                    <input 
                        onChange={(e) => 
                        setCredentials({ ...credentials, email: e.target.value})
                        } 
                        className="common-input"
                        placeholder="Email or Phone" 
                    />
                    <input 
                        onChange={(e) => 
                            setCredentials({ ...credentials, password: e.target.value})
                        }
                        className="common-input"
                        placeholder="Enter your Password"
                    />
                </div>
                <button onClick={login} className="login-btn" >
                    Sign in
                </button>
            </div>
            {/* <hr class='hr-text' data-content="OR" /> */}
            <hr className='hr-text' data-content="OR" />

            <div className="googleBtn-container">
                <GoogleButton
                    className="google-btn"
                    onClick={googleSignIn}
                />

                <p className="signup">
                    New to LinkedIn? <span className="join-now" onClick={() => navigate('/register')}>Join now</span>
                </p>
            </div>
        </div>
    )
}

export default LoginComponent