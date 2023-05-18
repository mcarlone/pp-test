interface IPokemon {
    url: string;
    name: string;
}

type PokemonState = {[id: string]: IPokemon}