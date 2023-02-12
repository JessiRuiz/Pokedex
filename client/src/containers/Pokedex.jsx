import * as styles from "./Pokedex.module.css";
import Card from "../components/Card";
import Button from "../components/Button";
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";



export default function Pokedex (){
    const dispatch = useDispatch()
    const params = useParams()
    const select = useSelector((state)=> state.pokedex.results)
    const nextOffset = useSelector((state)=> state.pokedex.nextOffset)
    
    useEffect(() => {dispatch(actions.getAllPokemon(params))
    },[params, dispatch])

    return (
    <div> 
        <div className={styles.wrapper}>
            {select.map((pokemon)=>(
                <div key={pokemon.id}>
                    <Card 
                    id={pokemon.id} 
                    name = {pokemon.name}
                    imagen={pokemon.imagen}
                    type1={pokemon.type1}
                    type2={pokemon.type2}
                    />
                </div>))}
        </div> 
        <Button name={"next page"} onClick={()=>{dispatch(actions.getAllPokemon({offset: nextOffset}))}}/>          
    </div>)
}