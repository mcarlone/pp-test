import * as actionTypes from "./actionTypes";

export function setPokemonList(pokemons: IPokemon[]) {
    return {
        type: actionTypes.SET_POKEMON_LIST,
        payload: pokemons
    }
}

export function setPokemonDetails(pokemonDetails: IPokemonDetails) {
    return {
        type: actionTypes.SET_POKEMON_DETAILS,
        payload: pokemonDetails
    }
}