import LoginAPI from "../api/AuthAPI"
import '../Sass/LoginComponent.scss'

const LoginComponent = () => {
    const login = () => {
        LoginAPI();
    }
    return (
        <div>
            <h1>Login Component</h1>
            <input className="common-input" placeholder="Enter your Email" />
            <button onClick={login} className="login-btn">Login To LinkedIn</button>
            <LoginAPI />
        </div>
    )
}

export default LoginComponent