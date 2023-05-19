import * as React from "react"
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { fetchPokemonDetails } from "../data";
import { setPokemonDetails } from './../store/actionCreators';


type Propss = {
    pokemonDetails: IPokemonDetails
}

const PokemonDetails: React.FC<Propss> = ({ pokemonDetails }) => {

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



type Props = {
    allPokemon: PokemonListState,
    pokemonDetailsList: PokemonDetailListState
}

const Pokedex: React.FC<Props> = ({ allPokemon, pokemonDetailsList }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const [searchTerm, setsearchTerm] = React.useState('');
    const [pokemonDetails, setttPokemonDetails] = React.useState({});

    console.log('pokemonDetailsList', pokemonDetailsList)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;
        if(allPokemon[inputValue]) {
            fetchPokemonDetails(inputValue).then(pokemonDetails => {
                setttPokemonDetails(pokemonDetails);
                dispatch(setPokemonDetails(pokemonDetails))
                console.log('pokemonDetails', pokemonDetails)
            })
        }
        setsearchTerm(inputValue)
    }

    const poekNames = Object.keys(allPokemon);
    const list22:JSX.Element[] = poekNames.map((p:any) => <option key={p} value={p}/>)

    return (
        <div>
            {/* <input
                type="text"
                id="pokemon-name"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleChange}
            /> */}

            Pokedex Search: 
            <input 
            list="pokemon-list" 
            id="pokemon-choice" 
            name="pokemon-choice"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleChange}
            />

            <datalist id="pokemon-list">
                {list22}
            </datalist>



            { pokemonDetailsList[searchTerm] && <PokemonDetails pokemonDetails={pokemonDetailsList[searchTerm]}/> }
        </div>
    )
}


export default Pokedex;