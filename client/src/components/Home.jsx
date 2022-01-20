import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../actions/index'
import { Link } from 'react-router-dom'
import Card from './Card'

export default function Home(){
    const dispatch = useDispatch()
    const allPokes = useSelector(state=> state.pokemon)
    // console.log(allPokes)

    useEffect(()=> {
        dispatch(getPokemons())
    }, [dispatch])

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getPokemons())
    }

    return(
        <React.Fragment>
            <h1> The PokeAPP </h1>
            {/* <Link to='/createyourpoke' > */}
                <button onClick={e=> handleSubmit(e)}> Create your own Pokemon! </button>
            {/* </Link> */}

           {   allPokes.map(x=> {
                return <Card key={x.id} id={x.id} name={x.name} img={x.img} /> })  
                           
                     
            } 
            {/* {console.log()   } */}
             
        </React.Fragment>
    )
}
