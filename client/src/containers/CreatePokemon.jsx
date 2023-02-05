import React, { useState } from "react";
import * as styles from "./CreatePokemon.module.css";
import Button from '../components/Button';
import Input from "../components/Input";
import TypeSelector from "../components/TypeSelector";

export default function CreatePokemon (){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [imagen, setImagen] = useState('');
    const [life, setLife] = useState('');
    const [attack, setAttack] = useState('');
    const [defense, setDefense] = useState('');
    const [speed, setSpeed] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const poke = {name};
        try {
            const result = await fetch('http://localhost:3001/pokemons',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(poke)
            })
            console.log(result);
            console.log('new Pokemon added');
        } catch(error) {
            console.log(error);
        }
    }

    return (
    <div className={styles.create}>
        <h2>Create Pokemon</h2>
        <form onSubmit={handleSubmit}>
            <label> Id </label>
            <Input value={id} onChange={setId}/>
            <label> Name </label>
            <Input value={name} onChange={setName}/>
            <label> Type </label>
            <TypeSelector value={type} onChange={setType}/>
            <label> Imagen </label>
            <Input value={imagen} onChange={setImagen}/>
            <label> Life </label>
            <Input value={life} onChange={setLife}/>
            <label> Attack </label>
            <Input value={attack} onChange={setAttack}/>
            <label> Defense </label>
            <Input value={defense} onChange={setDefense}/>
            <label> Speed </label>
            <Input value={speed} onChange={setSpeed}/>
            <label> Height </label>
            <Input value={height} onChange={setHeight}/>
            <label> Weight </label>
            <Input value={weight} onChange={setWeight}/>
            <Button name={"Add Pokemon "}/>
        </form>
    </div>)
}