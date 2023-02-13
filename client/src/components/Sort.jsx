import React from "react"
import * as styles from "./Sort.module.css";

export default function Sort ({sort, onChange}){

    return (
         <select className={styles.select}
            value={sort}
            onChange={(e)=> {
               switch(e.target.value) {
                  case "lowest":
                     return onChange({ sort: 'id', order: 'ascending'})
                  case "highest":
                     return onChange({ sort: 'id', order: 'descending'})
                  case "a_z":
                     return onChange({ sort: 'name', order: 'ascending'})
                  case "z_a":
                     return onChange({ sort: 'name', order: 'descending'})
                  default:
                     return onChange({})
               }
            }}
         >
            <option value="" disabled selected> Sort By  </option>
            <option value="lowest"> Lowest Number </option>
            <option value="highest"> Highest Number </option>
            <option value="a_z"> A-Z </option>
            <option value="z_a"> Z-A </option>
         </select> 
    )
}