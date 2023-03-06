import React, { Component } from "react";
import axios from "axios";

import './App.css';
import SignUp from './signup';
import Homepage from './homepage';
import Matchpage from "./match";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
  
function App() {
return (
    <Router>
    <Routes>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/home' element={<Homepage/>} />
        <Route path='/match' element={<Matchpage/>} />
    </Routes>
    </Router>
);
}
  
export default App;