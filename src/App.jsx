import { useState } from 'react'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
import SignIn from './components/home';
import SignUp from './components/signup';
import Dashboard from './components/dashboard';
import Sell from './components/sell';
const App=()=>{

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path="/sell" element={<Sell/>}></Route>
    </Routes>
    </Router>
      
    </>
  )
}

export default App
