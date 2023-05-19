import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";

const initialState: PokemonListState = {};

export function PokemonListReducer(state: PokemonListState = initialState, action: any): PokemonListState {
  switch (action.type) {
    case actionTypes.SET_POKEMON_LIST:
      const newState: PokemonListState = action.payload.reduce((acc:{[id: string]: IPokemon}, val:IPokemon) => { 
          acc[val.name] = { ...val }
          return acc;
        }, {})
      ;
      return newState;
  }
  return state;
}


const detailsListInitialState = {};

export function PokemonDetailsListReducer(state: PokemonDetailListState = detailsListInitialState, action: any): PokemonDetailListState {
  switch (action.type) {
    case actionTypes.SET_POKEMON_DETAILS:

      const newPokemonDetails: IPokemonDetails = {
        name: action.payload.name,
        weight: action.payload.weight,
        abilities: action.payload.abilities.map((a:any) => a.ability), // must copy!! and pluck names
        species: action.payload.species.name,
        spriteURL: action.payload.sprites.front_default        
      };

      return Object.assign({}, state, {[newPokemonDetails.name]: newPokemonDetails});
  }
  return state;
}




export const allReducers = combineReducers<AppState>({
  pokemonList: PokemonListReducer,
  pokemonDetailsList: PokemonDetailsListReducer
});