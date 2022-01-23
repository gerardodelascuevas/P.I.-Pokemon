import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({ id, name, img, type}){
    let types = type[0].type.name
    if(type[1]) types = types + ' & ' + type[1].type.name
    
   if(name) name = name.charAt(0).toUpperCase() + name.slice(1)
     
    return (
        <div className='card'>

            <h2 className='id'> {id} </h2>
            <h1 className='name'> {name} </h1>
            <img className='img' src={img} alt='Sorry, image not found' />  
            <h4> Type: {types} </h4>
            <Link to={`./pokemons/${id}`}>
            <button className='button'> Go to the details  </button>        
            </Link>
        </div>
    )
}