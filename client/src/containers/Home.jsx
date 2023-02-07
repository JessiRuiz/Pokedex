import React from "react";
import * as styles from "./Home.module.css";
import eevees from "../imagen/eevee-evolutions.png"

export default function Home (){
    return (
    <div className={styles.home}>
       <img src={eevees} alt="MDN"></img> 
    </div>)
}