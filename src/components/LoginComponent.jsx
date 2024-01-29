import { useState } from "react"
import { LoginAPI } from "../api/AuthAPI"
import LinkedInLogo from '../assets/linkedInLogo.png';
import '../Sass/LoginComponent.scss'

const LoginComponent = () => {
    const [credentials, setCredentials] = useState({});
    const login = async () => {
        try {
            let res = await LoginAPI(credentials.email, credentials.password);
            console.log(res?.user);
        }
        catch (err) {
            console.log(err.errors.message);
        }
    };

    return (
        <div className="login-wrapper">
            <img src={LinkedInLogo} alt="LinkedInLogo" className="linkedinLogo" />

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
                Log in to LinkedIn
            </button>
        </div>
    )
}

export default LoginComponent