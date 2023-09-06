import { useState } from "react";

const Register = () => {
    return ( 
        <div className="register">
            <form className="login">
                <h3>Register</h3>
                <div>
                    <input type="email" placeholder="Enter email" required />
                </div>
                <div>
                    <input type="password" placeholder="Set password" required />
                </div>
                <div>
                    <input type="password" placeholder="Confirm password" required />
                </div>
                <button className="button" type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
