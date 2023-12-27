import LoginAPI from "../api/AuthAPI"

const LoginComponent = () => {
    return (
        <div>
            <h1>Login Component</h1>
            <button className="login-btn">Login To LinkedIn</button>
            <LoginAPI />
        </div>
    )
}

export default LoginComponent