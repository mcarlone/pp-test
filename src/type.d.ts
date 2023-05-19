interface IPokemon {
    url: string;
    name: string;
}

type PokemonListState = {[id: string]: IPokemon}

interface IPokemonDetails {
    name: string;
    weight: number;
    abilities: IAbility[];
    species: string;
    spriteURL: string;
}

type PokemonDetailListState = {[id: string]: IPokemonDetails}

interface IAbility {
    name: string
}

// interface ISpecies {
//     name: string
// }

interface AppState {
    pokemonList: PokemonListState;
    pokemonDetailsList: PokemonDetailListState;
  }
  