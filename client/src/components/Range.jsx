import React from "react"
import * as styles from "./Range.module.css";

export default function Range ({value, onChange, min="1", max="255"}){

    return (
        <span>{value}
        <input className={styles.range}
            type = "range"
            min={min} 
            max={max}
            required
            value={value}
            onChange={(e)=> onChange(e.target.value)}
        />
        </span>
    )
}