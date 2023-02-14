import React from "react"
import * as styles from "./Error.module.css";


export default function Error ({error}){

    return (
        <div className={styles.error}>
            {error}
        </div>
    )
}