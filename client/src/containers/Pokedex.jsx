import * as styles from "./Pokedex.module.css";
import Card from "../components/Card";
import Button from "../components/Button";
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TypeSelector from "../components/TypeSelector";
import Sort from "../components/Sort";
import Input from "../components/Input";
import Error from "../components/Error";



export default function Pokedex (){
    const dispatch = useDispatch()
    const select = useSelector((state)=> state.pokedex.results)
    const error = useSelector((state)=> state.error)
    const nextOffset = useSelector((state)=> state.pokedex.nextOffset)
    const previousOffset = useSelector((state)=> state.pokedex.previousOffset)
    const [type, setType] = useState('');
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState('');
    const history = useHistory()

    const getAllAction = (offset=0) => {
        dispatch(actions.getAllPokemon({type, offset, ...sort}))
    }

    useEffect(() => {
        getAllAction()
    },[type, sort.order, sort.sort])

    return (
    <div> 
        <div className={styles.search}>
        <Input value={search} onChange={setSearch}/>
        <Button name={"Search By Name"} onClick={()=>{dispatch(actions.getByName(search.toLowerCase()))}}/>
        </div>
        <div className={styles.filter}>
            <TypeSelector value={type} onChange={setType}/>
            <Sort value={sort} onChange={setSort}/>
        </div>
        {error? <Error error={error}/> : null}
        <div className={styles.wrapper}>
         
            {select.map((pokemon)=>(
                <div key={pokemon.id}>
                    <Card 
                    id={pokemon.id} 
                    name = {pokemon.name}
                    imagen={pokemon.imagen}
                    type1={pokemon.type1}
                    type2={pokemon.type2}
                    onClick={()=> history.push(`pokedex/${pokemon.id}`)}
                    />
                </div>))}
        </div> 
        <Button name={"previous page"} onClick={()=>{(getAllAction(previousOffset))}}/>       
        <Button name={"next page"} onClick={()=>{(getAllAction(nextOffset))}}/>    
    </div>)
}