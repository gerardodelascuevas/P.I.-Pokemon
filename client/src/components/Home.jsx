import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../actions/index'
import { Link } from 'react-router-dom'
import Search from './Search'
import Card from './Card'
import Paginated from './Paginated'
import './Home.css'

export default function Home(){
    const dispatch = useDispatch()
    const allPokes = useSelector(state=> state.pokemon)   

    const [pages, setPages] = useState(1)
    const [pokepp, setPokepp] = useState(12)

    let lastPoke = pages * pokepp
    let firstPoke = lastPoke - pokepp
    let currentPoke = allPokes.slice(firstPoke, lastPoke)
    
    let pagination = (number)=> {        
       return setPages(number)        
    }
   

    useEffect(()=> {
        dispatch(getPokemons())
    }, [dispatch])

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getPokemons())
    }    


    return(
        <div>
            <h1> The PokeAPP </h1>
            <Search />
            <Link to='/'> 
            <button id='backtothelanding'> Back to the Landing Page </button>
            </Link>            
            <Paginated
            key={1}
            pokepp = { pokepp }
            allPokes = { allPokes.length }
            pagination = { pagination }
            />
            <span className='span'> <b> You are on Page {pages} </b> </span>  
            <div className='cards'>        
           {   currentPoke.map(x=> {               
                return <Card key={x.id} id={x.id} name={x.name} img={x.img} />
                 })            
            }               
            </div>         
        </div>
    )
}
                    
                   
          