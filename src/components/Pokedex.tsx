import * as React from "react"
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { fetchPokemonDetails } from "../data";
import { setPokemonDetails } from './../store/actionCreators';
import PokemonDetails from './PokemonDetails';
import Search from './Search';
import { savedSearches, saveSearch } from './../utils';

type Props = {
    allPokemon: PokemonListState,
    pokemonDetailsList: PokemonDetailListState
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
            })
        }
    }

    return (
        <div>
            Pokedex Search: 
            <Search allPokemon={allPokemon} searchTerm={searchTerm} handleChange={handleChange}/>
 
            { pokemonDetailsList[searchTerm] && <PokemonDetails pokemonDetails={pokemonDetailsList[searchTerm]}/> }

            <h2>Previously Searched Pokemon:</h2>
            <ul>
                { savedSearches().map((searchTerm:string) => (<li style={{cursor:'pointer'}} key={searchTerm} onClick={ (e:React.MouseEvent<HTMLLIElement>):void => { setsearchTerm(searchTerm); fetchPokemon(searchTerm) }}>{searchTerm}</li>)) }
            </ul>
        </div>
    )
}


export default Pokedex;