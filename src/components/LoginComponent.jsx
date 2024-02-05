import { useState } from "react"
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI"
import LinkedInLogo from '../assets/linkedInLogo.png';
import GoogleButton from 'react-google-button'
import '../Sass/LoginComponent.scss'
import { toast } from "react-toastify";

const LoginComponent = () => {
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

    const googleSignIn = () => {
        let response = GoogleSignInAPI();
        console.log(response);
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
            <hr class='hr-text' data-content="OR" />
            <div className="googleBtn-container">
                <GoogleButton
                    className="google-btn"
                    onClick={googleSignIn}
                />

                <p className="signup">
                    New to LinkedIn? <span className="join-now">Join now</span>
                </p>
            </div>
        </div>
    )
}

export default LoginComponent