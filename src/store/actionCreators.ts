import * as actionTypes from "./actionTypes";

export function setPokemonList(pokemons: IPokemon[]) {
    return {
        type: actionTypes.SET_POKEMON_LIST,
        payload: pokemons
    }
}