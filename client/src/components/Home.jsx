import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterCreate, getPokemons, orderByForce, orderByName } from '../actions/index'
import { Link } from 'react-router-dom'
import Search from './Search'
import Card from './Card'
import Paginated from './Paginated'
import './Home.css'

export default function Home(){
    const dispatch = useDispatch()
    const allPokes = useSelector(state=> state.pokemon)   

    useEffect(()=> dispatch(getPokemons()), [dispatch])     
    
    //INICIO DE LOGICA DE PAGINADO 
    const [pages, setPages] = useState(1)
    const [pokepp] = useState(12)

    let lastPoke = pages * pokepp
    let firstPoke = lastPoke - pokepp
    let currentPoke = allPokes.slice(firstPoke, lastPoke)
    
    let pagination = (number)=>  setPages(number)        
       //FIN DE LOGICA DE PAGINADO        
      
       //LOGICA DE FILTRADO POR DONDE FUE CREADO 
        const handleFilterByCreate = (e)=> {
            dispatch(filterCreate(e.target.value))
            console.log(e.target.value)
        }
       //FIN DE LOGICA DE FILTRADO POR DONDE FUE CREADO
       
       //console.log(allPokes)
    
       //LOGICA DE ORDENAMIENTO POR NOMBRE 
       const [ordByName, setOrdByName] = useState('')

        const orderbyname = (e)=> {
           // e.preventDefault()
            dispatch(orderByName(e))            
            setPages(1)
            setOrdByName(`order ${e}`)
        }
       //FIN DE LOGICA DE ORDENAMIENTO POR NOMBRE 

       //INICIO DE LOGICA DE ORDENAMIENTO POR FUERZA 
       const [ordByForce, setOrdByForce] = useState('')
         const orderbyforce = (e)=> {
             //e.preventDefault()
             dispatch(orderByForce(e))
             setOrdByForce(`order ${e}`)
         }
       //FIN DE LOGICA DE ORDENAMIENTO POR FUERZA 

    return(
        <div>
            <h1> The PokeAPP </h1>

            <Search />  

            <div className='orders'>
                <select onChange={e=> handleFilterByCreate(e)}>
                    <option key='Created'>Created by </option>
                    <option key='Created by the API'> Created by the API </option>
                    <option key='Created by you'> Created by you </option>
                </select>

                <select onChange={e=> orderbyname(e.target.value)}>
                    <option key='order'> Order by Name </option>
                    <option key='desc' value='down'> From A to Z  </option>
                    <option  key='asc' value='up'> From Z to A  </option>                    
                </select>

                <select onChange={e=> orderbyforce(e.target.value)}>
                    <option key='ord'> Order by force </option>
                    <option key='up'value='up'> Ascending </option>
                    <option key='down'value='down'> Descending </option>
                </select>
            </div>

            <Link to='/create' >
                <button className='button-create'> Create your own Pokemon! </button>    
            </Link>  

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
                return <Card key={x.id } id={x.id} name={x.name} img={x.img} type={x.type} />
                 })            
           }  

            </div>  

        </div>
    )
}

                   
          