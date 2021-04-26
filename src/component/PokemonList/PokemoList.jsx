import React, { useEffect, useState } from 'react';
import { getPokemonWithLimit, getPokemonByName, getPokemonImgUrl } from '../../api/api';
import { AbilityCard } from '../AbilityCard/';
import { PokemonCard } from '../PokemonCard';
import './pokemon_list.scss'

export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [visibleStatus, setVisibleStatus] = useState(false);
  const [imgUrl, setTmgUrl] = useState('');
  const [pokemonStats, setPokemnStats] = useState(null)

  const loadPokemonFromServer = async() => {
    const pokemonFromServer = await getPokemonWithLimit(12);

    setPokemonList(pokemonFromServer);
  }

  const loadPokemonByName = async(name, callback) => {
    const response = await getPokemonByName(name);

    callback(response);
  }

  const isVisibleAbilityCard = (status) => {
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
  }, [])

  return (
    <>
      <div className="pokemon_list">{pokemonList.map(pokemon => (
        <PokemonCard
          name={pokemon.name}
          loadPokemonByName={loadPokemonByName}
          isVisibleAbilityCard={isVisibleAbilityCard}
          loadImgUrl={loadImgUrl}
          getPokemonStats={getPokemonStats}
        />
        ))}
      </div>
      <div>
        {(visibleStatus)
         ? (<AbilityCard
              imgUrl={imgUrl}
              pokemonStats={pokemonStats}
         />)
         : (<div></div>)
         }
      </div>
    </>
  );
}