import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import './home.css'
import PokemonCard from '../components/pokemonCard';

const Home = () => {

    const [ pokemons, setPokemons ] = useState([]);

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = () => {
        var endpoints = [];
        for (var i = 1; i < 53; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    }

    const pokemonFilter = (name) => {
      var filteredPokemons = [];
      if (name === "") {
        getPokemon();
      }
      for (var i in pokemons) {
        if (pokemons[i].data.name.includes(name)) {
          filteredPokemons.push(pokemons[i]);
        }
      }
      setPokemons(filteredPokemons);
    };

  return (

    <>
      <Navbar pokemonFilter={pokemonFilter} />

      <div className="container-home">
        <div className="content-home">
          {pokemons.map((pokemon, key) => (
            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} key={key} />
          ))}
        </div>
      </div>
    </>

  )
}

export default Home