import { useState } from 'react';
import { api } from '../../services/api'
import { FaSearch } from "react-icons/fa";
import './index.css'

export function PokemonFinder() {

    const [namePokemon, setNamePokemon] = useState('')
    const [pokemonData, setPokemonData] = useState(null)
    const [alertError, setAlertError] = useState("")


    async function handleGetPokemon(event) {
        event.preventDefault()

        if (!namePokemon) {
            setPokemonData(null)
            return setAlertError("Campo vazio")
        }
        try {
            const result = await getApiPokemon(namePokemon.toLowerCase());

            if (result.statusCode === 200) {
                setAlertError("")
                return setPokemonData(result.data)
            } else if (result.statusCode === 404) {
                setPokemonData(null)
                return setAlertError(result.message)
            }

        } catch (error) {
            setPokemonData(null)
        }
    }

    async function getApiPokemon(namePokemon) {

        try {

            const response = await api.get(`/${namePokemon}`)
            return { statusCode: response.status, data: response.data }

        } catch (error) {

            if (error.response.status === 404) {
                return { statusCode: error.response.status, message: "Não foi possivel localizar o pokemon na pokedex" }
            } else {
                return { statusCode: error.response.status, message: "Não foi possivel localizar o pokemon na pokedex" }
            }
        }

    }


    return (
        <form>
            <div className="input-wrapper">
                <input
                    type="text"
                    id='input-pokemon'
                    required
                    onChange={e => setNamePokemon(e.target.value)}
                />
                <label htmlFor="input-pokemon" id='label-pokemon'>Nome do Pokemon</label>
            </div>

            {
                alertError && <p className='alertError'>{alertError}</p>
            }


            <button
                className='bnt-get-pokemon'
                onClick={handleGetPokemon}
            >
                <FaSearch />
                <span>BUSCAR</span>
            </button>


            {
                pokemonData &&
                <div className="container_pokemon">
                    <h2>Pokemon: {pokemonData.name} - Habilidades: {pokemonData.abilities.length}</h2>
                    <img src={pokemonData.sprites.front_default} alt="" />
                    <ul>
                        {pokemonData.abilities.map((abilities) => (
                            <li key={abilities.slot}>{abilities.ability.name}</li>
                        ))}
                    </ul>
                </div>
            }

        </form>
    )
}