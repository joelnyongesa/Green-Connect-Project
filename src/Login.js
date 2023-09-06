import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        if(email==='user@example.com'&& password==='password'){
            navigate('/feed')
        }else{
            alert('Invalid credentials')
        }
    }
    

    return ( 
        <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
            <h3>Login</h3>
            <div>
                <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className="login-button" type="submit">Login</button>
            <p>Forgot password? Click Here</p>
            <button className="register-button"><Link to = "/register">Register new account</Link></button>

        </form>
    </div>
    
     );
}
 
export default Login;