import React from "react"
import * as styles from "./Datasheet.module.css";
import TypeTag from "../components/TypeTag";

export default function Datasheet(props){
    return (
    <div className={styles.datasheet}>
        <div className={styles.square}>
            <img className={styles.image} src={props.imagen}/>
        </div>
        <div className={styles.square}>
            <h2 className={styles.number}> ID #{props.id} </h2>
            <h3 className={styles.name}> {props.name}</h3>
            <div> 
                <div className={styles.type}> Type </div>
                <TypeTag type={props.type1}/>
                {props.type2?<TypeTag type={props.type2}/>: null}
            </div>
            <div className={styles.line}>...</div>
            <div className={styles.stats}>life {props.life}</div>
            <div className={styles.stats}>attack {props.attack}</div>
            <div className={styles.stats}>defense {props.defense}</div>
            <div className={styles.stats}>speed {props.speed}</div>
            <div className={styles.line}>...</div>
            <div className={styles.size}>height {props.height}</div>
            <div className={styles.size}>weight {props.weight}</div>
        </div>
    </div>);
}