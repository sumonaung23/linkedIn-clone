import { useState } from "react"
import LoginAPI from "../api/AuthAPI"
import '../Sass/LoginComponent.scss'

const LoginComponent = () => {
    const [credentials, setCredentials] = useState({});
    const login = () => {
        LoginAPI(credentials.email, credentials.password)
    };

    return (
        <div className="login-wrapper">
            <h1>Login Component</h1>
            <div className="auth-inputs">
                <input 
                    onChange={(e) => 
                    setCredentials({ ...credentials, email: e.target.value})
                    } 
                    className="common-input"
                    placeholder="Enter your Email" 
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