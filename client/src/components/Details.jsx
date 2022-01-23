import {React, useEffect } from 'react';
import './Details.css'
import { useSelector, useDispatch } from 'react-redux';
import './Details.css'
// import { getByID } from '../actions';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Details(){
    const dispatch = useDispatch()
    let myPoke = useSelector(state=> state.pokemon)
    const { id } = useParams()      
    myPoke = myPoke.find(x=> {
        if(x.id == id){           
           myPoke = x
           return myPoke 
        } 
    })   

    return(     
            
            <div className='pokedetails'>
                <Link to='/home'>
                    <button className='buttonDetail'> Back to Home </button>
                </Link>
                <h1> {myPoke.name} </h1>
                 
                <img className='imgagen'src={myPoke.img} alt={myPoke.name} />
                <h4> Life:  {myPoke.life} </h4>
                <h4> Force:  {myPoke.force} </h4>
                <h4> Defense:  {myPoke.defense} </h4>
                <h4> Speed:  {myPoke.speed} </h4>
                <h4> Weight: {myPoke.weight} </h4>
                <h4> Height: {myPoke.height} </h4>  
                       
            </div>       
    )
    
    
}
