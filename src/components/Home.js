import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import './index.css';
const Home = () => {
    return (
        <div className="main-container">
            <Header/>
            <div className="navbar">
                <div className="navbar-txt">
                    <button className="regbtn"><Link to= "/register">Register</Link></button>
                    <button className="loginbtn"><Link to= "/login">Login</Link></button>
                </div>
            </div>
            <Outlet></Outlet>

            <div>
            <Hero/>
            </div>
        </div>
     );
}
 
export default Home;