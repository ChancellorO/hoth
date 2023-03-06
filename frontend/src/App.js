import React, { Component } from "react";
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import SignUp from './signup';
  
function App() {
return (
    <Router>
    <Routes>
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
);
}
  
export default App;