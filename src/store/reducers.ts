import * as actionTypes from "./actionTypes";

const initialState: PokemonState = {};

export function PokemonListReducer(state: PokemonState = initialState, action: any): PokemonState {
  switch (action.type) {
    case actionTypes.SET_POKEMON_LIST:
      const newState: PokemonState = action.payload.reduce((acc:{[id: string]: IPokemon}, val:IPokemon) => { 
          acc[val.name] = { ...val }
          return acc;
        }, {})
      ;
      return newState;
  }
  return state;
}

