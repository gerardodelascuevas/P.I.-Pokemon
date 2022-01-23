import './App.css';
import {React, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import Footer from './components/Footer'
import Details from './components/Details';



 function App() {

  return (

    <div className="App">      
      <Routes>
        <Route index element = {<Landing />} /> 
        <Route path='/home' element = {<Home />} />
         <Route path='/home/pokemons/:id' element ={ <Details />} />
       

      </Routes>
      
      <Footer /> 
    </div>
  );
}
export default App



