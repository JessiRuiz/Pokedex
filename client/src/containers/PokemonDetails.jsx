import React from "react";
import * as styles from "./PokemonDetails.module.css";
import Card from "../components/Card";
//import eevees from "../imagen/eevee-evolutions.png"
import { useParams } from "react-router-dom";

export default function PokemonDetails(){
    const params = useParams()
    console.log(params);

    return (
    <div className={styles.wrapper}>
    POKEMON DETAILS
       <Card id={params.id} />
    </div>)
};