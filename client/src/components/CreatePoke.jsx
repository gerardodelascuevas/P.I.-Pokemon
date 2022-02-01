import React from "react";
import './CreatePoke.css'
import { getType, postPokemon } from '../actions'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'


export default function CreatePoke(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=> dispatch(getType()), [dispatch])

    const allTypes = useSelector(state=> state.type)

    const [typeOne, setTypeOne] = useState('')
    const handlePokeOneType = (e)=> {
        setTypeOne(e.target.value)
    }

    // const [typeTwo, setTypeTwo] = useState('')
    // const handlePokeTwoType = (e)=> {
    //     setTypeTwo(e.target.value)
    // }

    const [newpoke, setNewpoke] = useState({
         id: '',
        name: '',
       // type: [], //[{slot: 1, type: {name: null}}], //[{} , {}]
        life: '',
        force: '',
        defense: '',
        speed: '',
        weight: '',
        height: '',
        img: "./img/whoisthatpoke.jpeg",       

    })

    const handleCreatePoke = (e)=> {

        e.target.name === 'name' || e.target.name === 'img' ? setNewpoke({
            ...newpoke,                     
            [e.target.name] : e.target.value,
        }) : 
        setNewpoke({
            ...newpoke,                     
            [e.target.name] : Number(e.target.value)
        })
        
    } 
   
    
    const onButtonCreate = (e)=> {
       // console.log(newpoke)
        e.preventDefault()
        dispatch(postPokemon(newpoke))
        alert('Your Pokemon has been created')
        setNewpoke({  
           // id: '',         
            name: '',           
            life: '',
            force: '',
            defense: '',
            speed: '',
            weight: '',
            height: '',
            img: './img/whoisthatpoke.jpeg',
            type: [{'name': typeOne}]
        })
        navigate('/home')
    }

    console.log(newpoke)
    return (
        <div> 
            <Link to= '/home'> 
                <button className="button"> Back to Home! </button>
            </Link> 
            <div className="input-create">
                <h3> Put the data of your custom Pokemon </h3>
                {/* <h5 > Pokemon Key: <input key='id' name='id' onChange={handleCreatePoke} type="number" min='41'/> </h5>  */}
                <h5 > Pokemon name: <input key='name' name='name' onChange={handleCreatePoke} type='text'/> </h5>                
                <h5 > Pokemon Type:  
                    <select  name= 'type' onChange={e=> handlePokeOneType(e)}> 
                        { allTypes.map(x=> <option key={x.name} name= 'type'  value={x.name} > {x.name} </option> )}  
                    </select>
                </h5>
                <h5 > Pokemon life: <input key='life' name='life' onChange={handleCreatePoke} type='range'min='1' max='100'/> </h5>
                <h5 > Pokemon force: <input key='force' name='force' onChange={handleCreatePoke} type='range'min='1' max='100'/> </h5>
                <h5> Pokemon defense: <input key='defense' name='defense' onChange={handleCreatePoke} type='range'min='1' max='100'/> </h5>
                <h5 > Pokemon speed: <input key='speed' name='speed' onChange={handleCreatePoke} type='range'min='1' max='100' /> </h5>
                <h5 > Pokemon weight: <input key='weight' name='weight' onChange={handleCreatePoke} type='range'min='1' max='100'/> </h5>
                <h5 > Pokemon height: <input key='height' name='height' onChange={handleCreatePoke} type='range'min='1' max='100'/> </h5>
                <button className="button" onClick={onButtonCreate}> Create! </button>
            </div>            
            
        </div>
    )
}