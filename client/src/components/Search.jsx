import React from 'react'
import './Search.css'
import { getType } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getByName } from '../actions'
import { useNavigate } from 'react-router'

export default function Search(){
    const dispatch = useDispatch()
    const allTypes = useSelector(state=> state.type)
    const navigate = useNavigate()  

    useEffect(()=> dispatch(getType()), [dispatch])
    
    const [name, setName] = useState('')
    
    const searching = (e)=> {
        e.preventDefault()
        console.log('hago click')
        // dispatch(getByName(name))
        setName(e)
        console.log(name)        
    }    

    return(
        <div>
            <input type='text' className='search' placeholder='Search your Pokemon' onChange={e=> setName(e.target.value)} />
            <button className='search' onClick={e=> searching(e)}> Search </button>
            {/* <select>
                <option> Order by Name </option>
                <option value='up'> Ascending </option>
                <option value='down'> Descending </option>
            </select>

            <select>
                <option> Order by force </option>
                <option value='up'> Ascending </option>
                <option value='down'> Descending </option>
            </select>
            <select>
                <option > Pokemon Type </option>
                { allTypes.map(x=> <option value='x.name'> {x.name} </option> )}
             </select>

            <select>
                <option>Created by </option>
                <option> Created by the database </option>
                <option> Created by you </option>
            </select>  */}          
        </div> 
    )
}               
                    
               
                
       