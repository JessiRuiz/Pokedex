import React from "react"
import * as styles from "./Datasheet.module.css";
import TypeTag from "../components/TypeTag";
import StatBar from "./StatBar";

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
            <div className={styles['stat-grid']}>
                <div className={styles.stats}>life: {props.life}</div><StatBar percentage={props.life/255*100} type={props.type1}/>
                <div className={styles.stats}>attack: {props.attack}</div><StatBar percentage={props.attack/255*100} type={props.type1}/>
                <div className={styles.stats}>defense: {props.defense}</div><StatBar percentage={props.defense/255*100} type={props.type1}/>
                <div className={styles.stats}>speed: {props.speed}</div><StatBar percentage={props.speed/255*100} type={props.type1}/>
            </div>

            <div className={styles.size}>Height {props.height}ft</div>
            <div className={styles.size}>Weight {props.weight} lb</div>
        </div>
    </div>);
}