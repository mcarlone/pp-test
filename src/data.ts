export async function fetchAllPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1500");

    if(!response.ok) {
        throw new Error(`HTTP PokeError! Status: ${response.status}`);
    }

    return await response.json();
}
  
export async function fetchPokemonDetails(identifier: string | number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`);

    if(!response.ok) {
        throw new Error(`HTTP PokeError! Status: ${response.status}`);
    }

    return await response.json();
}