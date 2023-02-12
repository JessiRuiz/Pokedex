import React from "react"
import * as styles from "./Datasheet.module.css";

export default function Datasheet(props){
    return (<div className={styles.datasheet}>
        
            <div className={styles.square}>
            <img className={styles.image} src={props.imagen}/>
            </div>
            <div className={styles.square}>
            <h2 className={styles.number}> ID #{props.id} </h2>
            <h3 className={styles.name}> {props.name}</h3>
            <h4 className={styles.type}>type {props.type1} {props.type2}</h4>
            </div>
            <div className={styles.square}>
            <div className={styles.stats}>height {props.height}</div>
            <div className={styles.stats}>weight {props.weight}</div>
            </div>
            <div className={styles.square}>
            <div className={styles.stats}>life {props.life}</div>
            <div className={styles.stats}>attack {props.attack}</div>
            <div className={styles.stats}>defense {props.defense}</div>
            <div className={styles.stats}>speed {props.speed}</div>
            </div>
            
            
        
    </div>);
}