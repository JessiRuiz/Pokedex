import React from "react"
import * as styles from "./Card.module.css";
import TypeTag from "../components/TypeTag";

export default function Card(props){
    return (<div className={styles.card}>
        <div className={styles.body}>
            <img className={styles.image} src={props.imagen}/>
            <h2 className={styles.id}> # {props.id}</h2>
            <h3 className={styles.name}> {props.name}</h3>
            <div>
            <TypeTag type={props.type1}/>
             {props.type2?<TypeTag type={props.type2}/>: null}
            </div>
        </div>
        <button className={styles.btn} onClick={props.onClick}>View Pokemon</button>
    </div>);
}