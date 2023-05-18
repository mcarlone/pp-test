import React from 'react';
import { useEffect } from 'react';
import { Dispatch } from "redux"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { setPokemonList } from './store/actionCreators';
import logo from './logo.svg';
import './App.css';

import { fetchAllPokemon, fetchPokemonDetails } from "./data";

function App() {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    fetchAllPokemon().then(d => {
      dispatch(setPokemonList(d.results))
    });
  }, []);

  const allPokemon: {[id: string]: IPokemon} = useSelector(
    (state: PokemonState) => state,
    shallowEqual
  )

  return (
    <div className="App">
      (Pokedex)
    </div>
  );
}

export default App;
