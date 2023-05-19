import * as React from "react"

type PokemonDetailsProps = {
    pokemonDetails: IPokemonDetails
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonDetails }) => {

    return (
        <div>
            <h3>{pokemonDetails.name}</h3>
            <img src={pokemonDetails.spriteURL}/>
            <p><b>Weight:</b> {pokemonDetails.weight} hectograms</p>
            <p><b>Abilities:</b> {pokemonDetails.abilities.map((a:IAbility) => a.name).join(', ')}</p>
            <p><b>Species:</b> {pokemonDetails.species  }</p>
        </div>
    )
}

export default PokemonDetails;