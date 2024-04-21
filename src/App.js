import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Login from './Components/Login';
import Home from './Components/Home';
import Cards from './Components/Cards';
import Sufg from './Components/Sufg';
import { AdminPanelSettings } from '@mui/icons-material';
import Admin from './Components/Admin';
import { Card } from '@mui/material';




function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Login/> */}
    {/* <Sufg/> */}

      <Routes>
      <Route path='/' element={<><Navbar/><Home/></>}/>
  
<Route path='/Login' element={<><Navbar/><Login/></>}/>
    <Route path='/Signin' element={<><Navbar/><Signin/></>}/>
    <Route path='/Cards' element={<><Sufg/><Cards/></>}/>
    {/* <Route path='/Admin' element={<Admin/><Card/>}/> */}
</Routes>
    </div>
  );
}

export default App;
