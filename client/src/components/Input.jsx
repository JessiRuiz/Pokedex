import React from "react"
import * as styles from "./Input.module.css";

export default function Input ({value, onChange, placeholder}){

    return (
        <input className={styles.input}
            type = "text"
            required
            placeholder={placeholder}
            value={value}
            onChange={(e)=> onChange(e.target.value)}
        />
    )
}