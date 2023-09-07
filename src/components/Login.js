import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Flex, FormControl, Input, Button, FormLabel, Heading, Text } from '@chakra-ui/react';

const Login = ({newuser}) => {
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        if(userName===newuser.username && password=== newuser.password){
            navigate('/feed')
        }else{
            alert('Invalid credentials')
        }
    }
    

    return ( 

        <Flex 
        flexDirection={'column'} 
        alignItems={'center'} 
        justifyContent={'center'} 
        width={'100vh'} 
        height={'100vh'} 
        margin={'auto'}
        >
            <form onSubmit={handleLogin}>
                <FormControl isRequired>
                    <Heading textAlign={'center'}>Log In</Heading>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)} />
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} mb={'1rem'}/>
                    <Button type="submit" colorScheme="#1D3C34" variant={'outline'}>Log In</Button>
                </FormControl>
                
                <Text m={'1em'}>Forgot Password? <Link to = "/register">Click Here</Link></Text>
                <Link to = "/register"><Button colorScheme="#1D3C34" variant={'outline'}>Register new account</Button></Link>

            </form>
        </Flex>
        
        // <div className="login-container">
        // <form className="login-form" onSubmit={handleLogin}>
        //     <h3>Login</h3>
        //     <div>
        //         <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        //     </div>
        //     <div>
        //         <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        //     </div>
        //     <button className="login-button" type="submit">Login</button>
        //     <p>Forgot password? <Link to = "/register">Click Here</Link></p>
        //     <Link to = "/register"><button className="register-button">Register new account</button></Link>

        // </form>
    // </div>
    
     );
}
 
export default Login;