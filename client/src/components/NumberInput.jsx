import React from "react"
import * as styles from "./NumberInput.module.css";

export default function Input ({value, onChange}){

    return (
        <input className={styles.number}
            type = "number"
            min = {0}
            max = {2204.4}
            required
            value={value}
            onChange={(e)=> onChange(e.target.value)}
        />
    )
}