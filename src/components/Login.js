import './index.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return ( 
        <div class="login-container">
        <form class="login-form">
            <h3>Login</h3>
            <div>
                <input type="email" placeholder="Enter email"/>
            </div>
            <div>
                <input type="password" placeholder="Enter password"/>
            </div>
            <button class="login-button" type="submit">Login</button>
            <p>Forgot password? Click Here</p>
            <button class="register-button"><Link to = "/register">Register new account</Link></button>

        </form>
    </div>
    
     );
}
 
export default Login;