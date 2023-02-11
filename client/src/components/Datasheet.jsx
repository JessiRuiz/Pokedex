import React from "react"
import * as styles from "./Datasheet.module.css";

export default function Datasheet(props){
    return (<div className={styles.datasheet}>
        
            <div className={styles.square}>
            <img className={styles.image} src={props.img}/>
            </div>
            <div className={styles.square}>
            <h2 className={styles.number}> ID #{props.id} </h2>
            <h3 className={styles.name}> {props.name}</h3>
            </div>
            <div className={styles.square}>
            <div className={styles.type}>{props.type}</div>
            </div>
            <div className={styles.square}>
            <div className={styles.stats}>{props.type}</div>
            </div>
            
            
        
    </div>);
}