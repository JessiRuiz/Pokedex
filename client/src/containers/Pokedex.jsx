import React from "react";
import * as styles from "./Pokedex.module.css";
import Card from "../components/Card";
//import eevees from "../imagen/eevee-evolutions.png"

export default function Pokedex (){
    return (
    <div className={styles.wrapper}>
       <Card/>
    </div>)
}