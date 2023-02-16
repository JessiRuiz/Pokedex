import React, { useEffect } from 'react';
import * as styles from "./TypeSelector.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions"

export default function TypeSelector ({type, onChange, isDefault}){
   const selectTypes = useSelector((state)=> state.types)
   const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getAllTypes())
  },[dispatch,])

    return (

      
         <select className={styles.select}
            value={type}
            onChange={(e)=> onChange(e.target.value, e.target.selectedOptions[0].label)}
         >
         <option value="" disabled selected={isDefault}> Select Type </option>
         {selectTypes.map((type)=>
                    <option 
                    key={type.id} 
                    value = {type.id}
                    label= {type.name}
                    >{type.name}</option>
                )}
            {/* <option value = "bug"> Bug </option>
            <option value = "dark"> Dark </option>
            <option value = "dragon"> Dragon </option>
            <option value = "electric"> Electric </option>
            <option value = "fairy"> Fairy </option>
            <option value = "fighting"> Fighting </option>
            <option value = "fire"> Fire </option>
            <option value = "flying"> Flying </option>
            <option value = "ghost"> Ghost </option>
            <option value = "grass"> Grass </option>
            <option value = "ground"> Ground </option>
            <option value = "ice"> Ice </option>
            <option value = "normal"> Normal </option>
            <option value = "poison"> Poison </option>
            <option value = "psychic"> Psychic </option>
            <option value = "rock"> Rock </option>
            <option value = "steel"> Steel </option>
            <option value = "water"> Water </option> */}
         </select> 
    )
}