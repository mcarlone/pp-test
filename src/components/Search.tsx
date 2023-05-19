import * as React from "react"

type Props = {
    allPokemon: PokemonListState,
    searchTerm: string,
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = ({ allPokemon, searchTerm, handleChange }) => {

    const pokemonkNames = Object.keys(allPokemon);
    const pokemonOptions:JSX.Element[] = pokemonkNames.map((p:any) => <option key={p} value={p}/>)

    return (
        <>
            <input 
            list="pokemon-list" 
            id="pokemon-choice" 
            name="pokemon-choice"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleChange}
            />

            <datalist id="pokemon-list">
                {pokemonOptions}
            </datalist>
        </>
    )
}

export default Search;