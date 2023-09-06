import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import {ChakraProvider} from '@chakra-ui/react'
import Feed from './Feed';

function App() {
  return (
    <ChakraProvider>
      <div className="">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='feed' element={<Feed />}/>
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;

