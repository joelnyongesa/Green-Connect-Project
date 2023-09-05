import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Register from './Register';


function App() {
  return (
  
      <div className="App">
        <div className="content">
          {/* <Routes> */}
            {/* <Login />  */}
            <Register />
          {/* </Routes> */}
        </div>
      </div>
  
  );
}

export default App;

