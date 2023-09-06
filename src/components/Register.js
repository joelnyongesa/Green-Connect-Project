
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Input, Button, Heading, Flex } from "@chakra-ui/react";

const Register = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();


    console.log(email, password, confirmPassword);

    const handleRegistration = (e)=>{
        e.preventDefault();
        if (password===confirmPassword){
            alert('registration successful')
            navigate('/login')
        }else{
            alert('Password do not match. Please try again.')
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
            <form onSubmit={handleRegistration}>
                <FormControl isRequired>
                    <Heading textAlign={'center'}>Register</Heading>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder='email@example.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" placeholder='retype password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} mb={'1em'}/>
                    <Button type="submit" colorScheme="#1D3C34" variant={'outline'}>Sign Up</Button>
                </FormControl>
            </form>
        </Flex>
        
    );
}

export default Register;

