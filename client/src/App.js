import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import Footer from './components/Footer'

function App() {
  return (

    <div className="App">      
      <Routes>
        <Route index element = {<Landing />} /> 
        <Route path='/home' element = {<Home />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
