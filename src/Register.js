import { Link } from "react-router-dom";

const Register = () => {
    return ( 
        <div className="register">
            <form className="login">
                <h3>Register</h3>
                <div>
                    <input type="email" placeholder="Enter email"/>
                </div>
                <div>
                    <input type="password" placeholder="Set password"/>
                </div>
                <div>
                    <input type="password" placeholder="Confirm password"/>
                </div>
                <button className="button" type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
