import * as styles from "./PokemonDetails.module.css";
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Datasheet from "../components/Datasheet";


export default function PokemonDetails(){ //exporta la funcion
    const dispatch = useDispatch()        //despacha una accion
    const params = useParams()            //nos permite usar la informacion que viene de la URL
    const select = useSelector((state)=> state.pokemonDetails) // nos permite acceder al estado de redux
    
    useEffect(() => {dispatch(actions.getPokemon(params.id)) // despacha un a accion
    },[params.id, dispatch])

    return (
    <div className={styles.details}>
       <Datasheet
       id={params.id} 
       name = {select.name}
       imagen={select.imagen}
       height={select.height}
       weight={select.weight}
       type1={select.type1}
       type2={select.type2}
       life={select.life}
       attack={select.attack}
       defense={select.defense}
       speed={select.speed}
       />
    </div>)
};