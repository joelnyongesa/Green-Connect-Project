import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import './index.css';
import { Flex, Heading, Text, Button } from "@chakra-ui/react";


const Home = () => {
    return (
        <Flex background={'#1D3C34'} flexDirection={'column'}  width={'100vw'} height={'100vh'} >
           <Heading p={'0.75em'} color={'#c2e189'}> <Header /> </Heading>
           <Flex height={'75%'} background={'#f0f0f0'} margin={'1em'} flexDirection={'column'} >
                <Flex height={'5em'} width={'100%'} justifyContent={'end'} padding={'1rem'}>
                    <Button colorScheme="#1D3C34" variant={'outline'} margin={'0.5rem'}><Link to= "/register">Register</Link></Button>
                    <Button colorScheme="#1D3C34" variant={'outline'} margin={'0.5rem'}><Link to= "/login">Login</Link></Button>
                </Flex>
                <Flex background={'#ffffff'} height={'82%'}  margin={'1rem'}>
                    <Hero />
                </Flex>
           </Flex>
        </Flex>
        // <div className="main-container">
        //     <Header/>
        //     <div className="navbar">
        //         <div className="navbar-txt">
        //             <button className="regbtn"><Link to= "/register">Register</Link></button>
        //             <button className="loginbtn"><Link to= "/login">Login</Link></button>
        //         </div>
        //     </div>
        //     <Outlet></Outlet>

        //     <div>
        //     <Hero/>
        //     </div>
        // </div>
     );
}
 
export default Home;