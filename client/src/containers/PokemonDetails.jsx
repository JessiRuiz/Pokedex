import * as styles from "./PokemonDetails.module.css";
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Datasheet from "../components/Datasheet";


export default function PokemonDetails(){
    const dispatch = useDispatch()
    const params = useParams()
    const select = useSelector((state)=> state.pokemonDetails)
    
    useEffect(() => {dispatch(actions.getPokemon(params.id))
    },[params.id, dispatch])

    return (
    <div className={styles.details}>
       <Datasheet
       id={params.id} 
       name = {select.name}

       />
    </div>)
};