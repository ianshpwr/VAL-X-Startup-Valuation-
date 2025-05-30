import React from 'react';
import Learn from './components/Learn';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Calculate from './components/Calculate';
import Explore from './components/Explore';
import Compare from './components/Compare';
import Report from './components/Report';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';


function App(){
  return <div>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>} />
  <Route path="/Learn" element={<Learn/>} />
  <Route path="/Explore" element={<Explore/>} />
  <Route path="/Calculate" element={<Calculate/>} />
  <Route path="/Compare" element={<Compare/>} />
  <Route path="/Report" element={<Report/>} />
  <Route path="/Login" element={<Login/>} />
  <Route path="/Signup" element={<Signup/>} />
  <Route path="/HomePage" element={<HomePage/>} />
  </Routes>
  </div>
}

export default App;