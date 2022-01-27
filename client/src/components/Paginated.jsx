import React from 'react'
import './Paginated.css'

export default function Paginated({ pokepp, allPokes, pagination }){
    let pages = []

    for(let i = 1; i <= Math.ceil(allPokes / pokepp); i++ ){
        pages.push(i)
    }   
    
    return (
        <nav>          
            <ol className='list-container'>    
                { pages.map(x=> {                                  
                      return <li key ={x} className='list'>
                          <button className='button' onClick={()=> pagination(x)}> {x} </button>                                              
                    </li>                     
                    })}    
            </ol>     
        </nav> 
    )
}