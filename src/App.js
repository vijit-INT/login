import './App.css';

import { Route,Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Users from './Pages/Users';
import Navbar from './Pages/Navbar';

function App() {

  return (
    <div className="App">
      <div className='Jpp'>
      <Navbar />
      <Routes>
       <Route path='/list' element={<Users />} />
       <Route path='/' element={<Login />} />
       <Route path='/register' element={<Register />} />
       </Routes>

      </div>
      
    </div>
  );
}

export default App;