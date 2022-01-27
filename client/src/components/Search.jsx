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

    //INICIO DE LOGICA DE ORDEMIENTO POR FUERZA 
    //console.log(myPoke.forEach(x => console.log(x.force)))
    

    //HACER UN ORDENAMIENTO 
    const handleFilterByForece = ()=> {
        let array = [myPoke] 
       // console.log('esto muestra en un primer punto el array: ' + array)      
        for(let i = 0; i < array[0].length; i++){
            for(let j= i + 1; j<array.length; j++){
                if(array[0][i].force > array[j].force){
                    let aux = array[i]
                    array[i] = array[i+1]
                    array[i+1] = aux; 
                }
            }
        }
         //console.log('esto muestra en un segundo punto el array: ' + array)
        return array
    }
    console.log(handleFilterByForece())

    //FIN DE LOGICA DE ORDENAMIENTO POR FUERZA  


    return(
        <div>

            <input type='text' className='search' placeholder='Search your Pokemon' onChange={e=> setName(e.target.value)} />
            <button className='search' onClick={e=> searching(e)}> Search </button>

            <select>
                <option> Order by Name </option>
                <option value='up'> Ascending </option>
                <option value='down'> Descending </option>
            </select>

            <select>
                <option> Order by force </option>
                <option value='up'> Ascending </option>
                <option value='down'> Descending </option>
            </select>

            <select onChange={e=> onClickInSelectByTypes(e.target.value)}>
                <option > Pokemon Type </option>
                { allTypes.map(x=> <option value={x.name} > {x.name} </option> )}                                
             </select>

            <select>
                <option>Created by </option>
                <option> Created by the database </option>
                <option> Created by you </option>
            </select>

        </div> 
    )
}               
                    
               
                
       