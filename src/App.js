import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
