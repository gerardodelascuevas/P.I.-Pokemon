import './App.css';
import {React, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Home from './components/Home'
import Footer from './components/Footer'
import Details from './components/Details'
import FilterType from './components/FilterType'
import CreatePoke from './components/CreatePoke'



 function App() {

  return (

    <div className="App">      
      <Routes>
        <Route index element = {<Landing />} /> 
        <Route path='/home' element = {<Home />} />
         <Route path='/home/pokemons/:id' element ={ <Details />} />
         <Route path='/types/:type/pokemons/:id' element ={ <Details />} />
         <Route path='/types/:type' element={ <FilterType /> } />
         <Route path='/create' element={ <CreatePoke /> } />
       

      </Routes>
      
      <Footer /> 
    </div>
  );
}
export default App



