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

const savedSearches = (): string[] => {
    const searchesStore = localStorage.getItem("savedSearches");
    const savedSearches = searchesStore ? JSON.parse(searchesStore) : [];
    return savedSearches;
}
const saveSearch = (searchTerm:string): void => {

    let cleanedSearches = savedSearches().filter((term:string) => term !== searchTerm);
    cleanedSearches.unshift(searchTerm);
    localStorage.setItem("savedSearches", JSON.stringify(cleanedSearches));
}


const Pokedex: React.FC<Props> = ({ allPokemon, pokemonDetailsList }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const [searchTerm, setsearchTerm] = React.useState('');
    const [pokemonDetails, setttPokemonDetails] = React.useState({});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;
        fetchPokemon(inputValue);
        setsearchTerm(inputValue)
        allPokemon[inputValue] && saveSearch(inputValue);
    }

    const fetchPokemon = (name:string) => {
        if(allPokemon[name]) {
            fetchPokemonDetails(name).then(pokemonDetails => {
                setttPokemonDetails(pokemonDetails);
                dispatch(setPokemonDetails(pokemonDetails))
                console.log('pokemonDetails', pokemonDetails)
            })
        }
    }

    const pokemonkNames = Object.keys(allPokemon);
    const pokemonOptions:JSX.Element[] = pokemonkNames.map((p:any) => <option key={p} value={p}/>)

    return (
        <div>
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
                {pokemonOptions}
            </datalist>

            { pokemonDetailsList[searchTerm] && <PokemonDetails pokemonDetails={pokemonDetailsList[searchTerm]}/> }

            <h2>Previously Searched Pokemon:</h2>
            <ul>
                { savedSearches().map((searchTerm:string) => (<li key={searchTerm} onClick={ (e:React.MouseEvent<HTMLLIElement>):void => { setsearchTerm(searchTerm); fetchPokemon(searchTerm) }}>{searchTerm}</li>)) }
            </ul>
        </div>
    )
}


export default Pokedex;