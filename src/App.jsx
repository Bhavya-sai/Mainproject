import React from 'react';
import Register from './Res';
import './App.css';
import Login from './Login';
// import Home from './Home';

import { Router,Route, Routes } from 'react-router-dom';

function App() {

  return (
        
        <Routes>
          {/* <Route exact path="/home" element={<Home/>}/> */}
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>

        </Routes>
      
  )
}

export default App
