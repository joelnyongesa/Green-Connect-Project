import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import {ChakraProvider} from '@chakra-ui/react'
import Feed from './Feed';
import { useState } from 'react';

function App() {
  const [newuser, setNewUser] = useState({})

  function handleAddUser(user){
    setNewUser(user)
    console.log(newuser)
  }
  return (
    <ChakraProvider>
      <div className="">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login newuser={newuser}/>}  />
          <Route path='/register' element={<Register onAddNewUser={handleAddUser}/>} />
          <Route path='feed' element={<Feed user={newuser}/>}/>
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;

