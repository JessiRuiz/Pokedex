import React from "react"
import * as styles from "./TypeTag.module.css";


export default function TypeTag ({type}){

    return (
        <span className={`${styles.typeTag} ${styles[type]}`}>
            {type}
        </span>
    )
}