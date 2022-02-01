import React from 'react'
import './Search.css'
import { getType } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getByName } from '../actions'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Card from "./Card";

export default function Search(){
    const dispatch = useDispatch()
    const allTypes = useSelector(state=> state.type)
    const navigate = useNavigate()  

    useEffect(()=> dispatch(getType()), [dispatch])
    
    const [name, setName] = useState('')

    const myPoke = useSelector(state=> state.pokemon) 
    
    //INICIO DE LOGICA DE LA BARRA DE BUSQUEDA & BOTON SEARCH 
    const searching = (e)=> {
        e.preventDefault()               
        setName(e)
        let found = myPoke.find(x=> x.name === name.toLowerCase()) 
        if(found) {           
            navigate(`/home/pokemons/${found.id}`)
        } else alert('Sorry Pokemon not found')          
    } 
    //FIN DE LOGICA DE LA BARRA DE BUSQUEDA & BOTON SEARCH 
    
    //INICIO DE LOGICA DEL SELECT TYPES
    function onClickInSelectByTypes(e){
        return navigate(`/types/${e}`)                         
    }
    //FIN DE LOGICA DE SELECT TYPES    

    return(
        <div>

            <input key='search' type='text' className='search' placeholder='Search your Pokemon' onChange={e=> setName(e.target.value)} />
            <button className='search' onClick={e=> searching(e)}> Search </button>     
            
            <select onChange={e=> onClickInSelectByTypes(e.target.value)}>
                <option key='type'> Pokemon Type </option>
                { allTypes.map(x=> <option key={x.name} value={x.name} > {x.name} </option> )}                                
             </select>

       

        </div> 
    )
}               
                    
               
                
       