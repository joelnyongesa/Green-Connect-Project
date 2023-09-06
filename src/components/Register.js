
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegistration = ()=>{
        if (password===confirmPassword){
            alert('registration successful')
            navigate('/login')
        }else{
            alert('Password do not match. Please try again.')
        }
    }

    return ( 
        <div className="register">
            <form className="login" onSubmit={handleRegistration}>
                <h3>Register</h3>
                <div>
                    <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <input type="password" value={password} placeholder="Set password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <button className="button"  type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;

