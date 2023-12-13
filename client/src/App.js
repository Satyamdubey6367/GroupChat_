import logo from './logo.svg';
import './App.css';
import Ragistration from './pages/Ragistration';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


function App() {
  const [userToken,setUserToken]=useState("")
  useEffect(() => {
     var token = localStorage.getItem("token")
     setUserToken(token)
  console.log(token,"token");
   
  }, [])
  
  return (
  
   <Routes>
       <Route  path='/' element={userToken?<Navigate to="/Dashboard"/>:<Ragistration/>}/>
       <Route  path='/Login' element={userToken?<Navigate to="/Dashboard"/>:<Login/>}/>
       <Route  path='/Dashboard' element={userToken?<Dashboard/>:<Navigate to="/"/>}/>
   </Routes>
   
  );
}

export default App;
