import { Link } from "react-router-dom";
import Hero from "./Hero";
const Home = () => {
    return (
        <div>
            <button><Link to= "/register">Register</Link></button>
            <button><Link to= "/login">Login</Link></button>
            <div>
            <Hero/>
            </div>
        </div>
     );
}
 
export default Home;