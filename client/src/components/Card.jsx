import React from 'react'
import './Card.css'

export default function Card({ id, name, img, }){
    return (
        <div className='card'>

            <h2 className='id'> {id} </h2>
            <h1 className='name'> {name} </h1>
            <img className='img' src={img} alt='Sorry, image not found' />    

            <button className='button'> Go to the details  </button>        
            
        </div>
    )
}