import React from "react";
import './CreatePoke.css'
import { getType } from '../actions'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

export default function CreatePoke(){
    const dispatch = useDispatch()

    useEffect(()=> dispatch(getType()), [dispatch])

    const allTypes = useSelector(state=> state.type)

    const [newpoke, setNewpoke] = useState({
        id: '',
        name: '',
        type: '',
        life: '',
        force: '',
        defense: '',
        speed: '',
        weight: '',
        height: '',
        img: './img/whoisthatpoke.jpeg'

    })

    const handleCreatePoke = (e)=> {
        setNewpoke({
            ...newpoke,
            [e.target.name] : e.target.value,
        })
    }
    
    const handleSelectPoke = (e)=> ({
        ...newpoke.type,
        [e.target.name]: [...newpoke.type, e.target.value]
    })
    console.log(newpoke)

    return (
        <div> 
            <Link to= '/home'> 
                <button className="button"> Back to Home! </button>
            </Link> 
            <div className="input-create">
                <h3> Put the data of your custom Pokemon </h3>
                <h5 > Pokemon Key: <input name='id' onChange={handleCreatePoke} type="number" min='101'/> </h5> 
                <h5 > Pokemon name: <input name='name' onChange={handleCreatePoke} type='text'/> </h5>                
                <h5 > Pokemon Type:  
                    <select onChange={e=> handleSelectPoke(e)}> 
                        { allTypes.map(x=> <option name= 'type'  value={x.name} > {x.name} </option> )}  
                    </select>
                </h5>
                <h5 > Pokemon life: <input name='life' onChange={handleCreatePoke} type='number'min='1'/> </h5>
                <h5 > Pokemon force: <input name='force' onChange={handleCreatePoke} type='number'min='1'/> </h5>
                <h5> Pokemon defense: <input name='defense' onChange={handleCreatePoke} type='number'min='1'/> </h5>
                <h5 > Pokemon speed: <input name='speed' onChange={handleCreatePoke} type='number'min='1'/> </h5>
                <h5 > Pokemon weight: <input name='weight' onChange={handleCreatePoke} type='number'min='1'/> </h5>
                <h5 > Pokemon height: <input name='height' onChange={handleCreatePoke} type='number'min='1'/> </h5>
                <button className="button"> Create! </button>
            </div>            
            
        </div>
    )
}