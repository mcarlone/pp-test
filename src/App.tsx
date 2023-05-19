import React from 'react';
import { useEffect } from 'react';
import { Dispatch } from "redux"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { setPokemonList } from './store/actionCreators';
import './App.css';

import Pokedex from './components/Pokedex';

import { fetchAllPokemon } from "./data";

function App() {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    fetchAllPokemon().then(d => {
      dispatch(setPokemonList(d.results))
    });
  }, []);

  const allPokemon: {[id: string]: IPokemon} = useSelector(
    (state: AppState) => state.pokemonList,
    shallowEqual
  )

  const pokemonDetailsList: {[id: string]: IPokemonDetails} = useSelector(
    (state: AppState) => state.pokemonDetailsList,
    shallowEqual
  )

  return (
    <div className="App">
      <Pokedex allPokemon={allPokemon} pokemonDetailsList={pokemonDetailsList}/>
    </div>
  );
}

export default App;
