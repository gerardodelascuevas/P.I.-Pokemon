import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'



export default function Landing(){
    return( 
        <div id='container'>
            <h1> Welcome to the PokeApp </h1>            
            <Link to = '/home'>             
                <button className='button'> Go to the App </button>
            </Link>

         </div>        
    )
}