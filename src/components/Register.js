
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Input, Button, Heading, Flex } from "@chakra-ui/react";

const Register = ({onAddNewUser}) => {
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const navigate = useNavigate();



    const handleRegistration = (e)=>{
        e.preventDefault();
        if (password===confirmPassword){
            alert('registration successful')
            navigate('/login')
        }else{
            alert('Password do not match. Please try again.')
        }
        
        const newUser = {
            username: userName,
            phonenumber:phoneNumber,
            password: password
        }

        fetch(' https://greenapp-api.onrender.com/user_details', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data => onAddNewUser(data))
        .catch(error => console.log(error));
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
                    <FormLabel>User name</FormLabel>
                    <Input type="text" placeholder='enter username' value={userName} onChange={(e)=>setUserName(e.target.value)} />
                    <FormLabel>Phone number</FormLabel>
                    <Input type="number" placeholder='enter phone number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
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

