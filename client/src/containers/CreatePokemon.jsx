import React, { useState, useEffect } from "react";
import * as styles from "./CreatePokemon.module.css";
import Button from '../components/Button';
import Input from "../components/Input";
import Error from "../components/Error";
import NumberInput from "../components/NumberInput";
import Range from "../components/Range";
import TypeSelector from "../components/TypeSelector";
import * as actions from "../redux/actions";
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";

export default function CreatePokemon (){ 
    const [name, setName] = useState('');
    const [type1, setType] = useState('Bug');
    const [type2, setType2] = useState('');
    const [imagen, setImagen] = useState('');
    const [life, setLife] = useState(125);
    const [attack, setAttack] = useState(125);
    const [defense, setDefense] = useState(125);
    const [speed, setSpeed] = useState(125);
    const [height, setHeight] = useState(125);
    const [weight, setWeight] = useState(125);
    const select = useSelector((state)=> state.newPokemon);
    const history = useHistory();
    const error = useSelector((state)=> state.error)
    
    const dispatch = useDispatch()
    useEffect(() => {if(select){history.push(`pokedex/${select}`)}},[select])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name.length> 30){return alert("The name should not exceed 30 characters")}
        const poke = {name: name.toLowerCase(),type2, type1, imagen, life, attack, defense, speed, height, weight};
        dispatch(actions.addPokemon(poke))
    }

    return (
    <div className={styles.create}>
        <h2>Create Pokemon</h2>
        <form onSubmit={handleSubmit}>
            <label> Name </label>
            <Input value={name} placeholder={"The name should not exceed 30 characters"} onChange={setName}/>
            <label> Type </label>
            <TypeSelector value={type1} onChange={setType}/>
            <label> Type 2 </label>
            <TypeSelector value={type2} onChange={setType2}/>
            <label> Image </label>
            <Input value={imagen} placeholder={"image url"} onChange={setImagen}/>
            <label> Life </label>
            <Range value={life} onChange={setLife}/>
            <label> Attack </label>
            <Range value={attack} onChange={setAttack}/>
            <label> Defense </label>
            <Range value={defense} onChange={setDefense}/>
            <label> Speed </label>
            <Range value={speed} onChange={setSpeed}/>
            <label> Height in feet </label>
            <NumberInput value={height} onChange={setHeight}/>
            <label> Weight in pounds</label>
            <NumberInput  value={weight} onChange={setWeight}/>
            {error? <Error error={error}/> : null}
            <Button name={"Add Pokemon "}/>
        </form>
    </div>)
}