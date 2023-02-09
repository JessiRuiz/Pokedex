import React from 'react';
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
import NavBar from './components/NavBar'
import Home from './containers/Home';
import CreatePokemon from './containers/CreatePokemon';
import './App.css';
import PokemonDetails from './containers/PokemonDetails';
import Pokedex from './containers/Pokedex';

function App() {
  const history = createBrowserHistory()
  return (
    <div className="App">
      <Router history={history}>
        <NavBar/>
        <div className='title'>
          <h1>Henry Pokemon</h1>
        </div>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path= "/create">
          <CreatePokemon/>
        </Route>
        <Route exact path= "/pokedex">
            <Pokedex />
        </Route>
        <Route exact path="/pokedex/:id">
          <PokemonDetails/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
