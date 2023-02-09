import React, { useState } from "react";
import * as styles from "./CreatePokemon.module.css";
import Button from '../components/Button';
import Input from "../components/Input";
import NumberInput from "../components/NumberInput";
import Range from "../components/Range";
import TypeSelector from "../components/TypeSelector";
import * as actions from "../redux/actions";
import {useDispatch} from 'react-redux';

export default function CreatePokemon (){ 
    const [name, setName] = useState('');
    const [type, setType] = useState('Bug');
    const [imagen, setImagen] = useState('');
    const [life, setLife] = useState(125);
    const [attack, setAttack] = useState(125);
    const [defense, setDefense] = useState(125);
    const [speed, setSpeed] = useState(125);
    const [height, setHeight] = useState(125);
    const [weight, setWeight] = useState(125);

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const poke = {name, type, imagen, life, attack, defense, speed, height, weight};
        try {
            dispatch(actions.addPokemon(poke))
            console.log('new Pokemon added');
        } catch(error) {
            console.log(error);
        }
    }

    return (
    <div className={styles.create}>
        <h2>Create Pokemon</h2>
        <form onSubmit={handleSubmit}>
            <label> Name </label>
            <Input value={name} onChange={setName}/>
            <label> Type </label>
            <TypeSelector value={type} onChange={setType}/>
            <label> Image </label>
            <Input value={imagen} onChange={setImagen}/>
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
            <Button name={"Add Pokemon "}/>
        </form>
    </div>)
}