import React, { useEffect, useState } from 'react';
import { getPokemonWithLimit, getPokemonByName, getPokemonImgUrl } from '../../api/api';
import { AbilityCard } from '../AbilityCard';
import { PokemonCard } from '../PokemonCard';
import './pokemon_list.scss'

export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [visibleAbility, setVisibleStatus] = useState(false);
  const [imgUrl, setTmgUrl] = useState('');
  const [pokemonStats, setPokemnStats] = useState(null);
  const [limitOfPokemon] = useState(12);
  const [offSet, setOffSet] = useState(0);

  const loadPokemonFromServer = async() => {
    const pokemonFromServer = await getPokemonWithLimit(limitOfPokemon, offSet);

    setPokemonList(pokemonFromServer);
  }

  const loadPokemonByName = async(name, callback) => {
    const response = await getPokemonByName(name);

    callback(response);
  }

  const isVisibleAbilityCard = () => {
    setVisibleStatus(true);
  }

  const loadImgUrl = (imgUrl) => {
    setTmgUrl(getPokemonImgUrl(imgUrl));
  }

  const getPokemonStats = (stats) => {
    setPokemnStats(stats);
  }

  useEffect(() => {
    loadPokemonFromServer();
  }, [offSet])

  const handleButton = () => {
    setOffSet(state => state + 12)
  }

  return (
    <>
      <div className="pokemon_list">
        {pokemonList.map(pokemon => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            loadPokemonByName={loadPokemonByName}
            isVisibleAbilityCard={isVisibleAbilityCard}
            loadImgUrl={loadImgUrl}
            getPokemonStats={getPokemonStats}
          />
        ))}
        <button
          className="button is-info is-outlined my_button"
          onClick={handleButton}
        >
          load more
        </button>
      </div>
      <div className="ability_block">
        {(visibleAbility) &&
          (<AbilityCard
              imgUrl={imgUrl}
              pokemonStats={pokemonStats}
         />)
        }
      </div>
    </>
  );
}