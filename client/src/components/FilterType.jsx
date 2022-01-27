import React from "react";
import { useParams } from "react-router"
import { useSelector } from "react-redux"
import Card from "./Card"
import './FilterType.css'
import { Link } from "react-router-dom";


export default function FilterType(){
    const { type } = useParams()
   let myPoke = useSelector(state=> state.pokemon) 

    let myPokeFilter = []
     for(let i = 0; i<myPoke.length; i++ ){
         if(myPoke[i].type[0].type.name === type) myPokeFilter.push(myPoke[i])
        else if(myPoke[i].type[1] && myPoke[i].type[1].type.name === type) myPokeFilter.push(myPoke[i])    
    }
    
    return(
        <div> 
            <h1>  Pokemon Type: {type} </h1> 
            <Link to = '/home'>
                <button className="button"> Back to Home </button>
            </Link>
            <div className="filterByType">                
                {   myPokeFilter.map(x=> {                                    
                        return  <Card key={x.id} id={x.id} name={x.name} img={x.img} type={x.type} />   
                })                          
            }   
            </div>
        </div>
    )
}        
                      
                      
                    
                    
    
