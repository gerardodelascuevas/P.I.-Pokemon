import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import pikachu from './img/presspikachu.jpg'
import  welcome from './img/weltopoke.png'


export default function Landing(){
    return( 
        <div id='container'>
           <img src={welcome} className='welcome' />  <br/>         
            <Link to = '/home'>             
                {/* <button className='button'> Go to the App </button> */}
                <img src={pikachu} alt='press to go to the app' className='pika'/>
            </Link>
            {/* <img src={pikachu} alt='pikachu' /> */}

         </div>        
    )
}