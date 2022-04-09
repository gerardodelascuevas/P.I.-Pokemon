import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({ id, name, img, type, Types }){
    let types = ''
    console.log('type ' + type)
    console.log('types ' + Types)
    
    if(Types && !type) types = Types[0].name 
   
    else{  
        if (type && !Types)  types = type[0].type.name
        if(!Types && type && type[1] ) types = types + ' & ' + type[1].type.name
    }
    
   if(name) name = name.charAt(0).toUpperCase() + name.slice(1)
  

   //console.log(type)
     
    return (
        <div> 
             
        <div className='card'>          
            <h2 className='id'> {id} </h2>
            <h1 className='name'> {name} </h1>
    <Link to={`./pokemons/${id}`} className='link'>
            <img className='img' src={img} alt='Sorry, image not found' />  
     </Link>
            <h4> Type: {types} </h4>    
            
        </div>
     
        </div>
    )
}