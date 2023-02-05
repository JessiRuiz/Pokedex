import React from "react"
import * as styles from "./Input.module.css";

export default function Input ({value, onChange}){

    return (
        <input className={styles.input}
            type = "text"
            required
            value={value}
            onChange={(e)=> onChange(e.target.value)}
        />
    )
}