import React, { useEffect, useState } from 'react';
import { getPokemonImgUrl } from '../../api/api';
import classname from 'classnames'
import './pokemon__card.scss';

export const PokemonCard = ({
  name,
  loadPokemonByName,
  loadImgUrl,
  getPokemonStats,
  isVisibleAbilityCard,
}) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    loadPokemonByName(name, setPokemon);
  }, [name, loadPokemonByName]);

  const onClickHandler = (pokemon, e) => {
    isVisibleAbilityCard(true);
    loadImgUrl(pokemon.id);

    const {
      name,
      types,
      weight,
      moves,
      stats,
    } = pokemon;

    getPokemonStats({
      name,
      types,
      weight,
      moves,
      stats,
    })
  }

  return (
    <div
      className="pokemon_card"
      onClick={(e) => (onClickHandler(pokemon, e))}
    >
      {(pokemon)
        ?
        ( <>
            <img
              className="pokemon_card__img"
              src={getPokemonImgUrl(pokemon.id)}
              alt={`${pokemon.name}`}
            />
            <span
              className="pokemon_card__name">
              {pokemon.name}
            </span>
            <div className="pokemon_card__type">
              {pokemon.types.map(type => (
                <span
                  className={classname('pokemon_card__type_name', type.type.name, {
                    'pokemon_card__type_name--fire': type.type.name === 'fire',
                    'pokemon_card__type_name--poison': type.type.name === 'poison',
                    'pokemon_card__type_name--grass': type.type.name === 'grass',
                    'pokemon_card__type_name--water': type.type.name === 'water',
                    'pokemon_card__type_name--electic': type.type.name === 'electric',
                    'pokemon_card__type_name--fairy' : type.type.name === 'fairy',
                    'pokemon_card__type_name--normal' : type.type.name === 'normal',
                    'pokemon_card__type_name--flying' : type.type.name === 'flying',
                    'pokemon_card__type_name--bug' : type.type.name === 'bug',
                    'pokemon_card__type_name--ground' : type.type.name === 'ground',
                    'pokemon_card__type_name--fighting' : type.type.name === 'fighting',
                    'pokemon_card__type_name--psychic' : type.type.name === 'psychic',
                  })}>
                    {type.type.name}
                  </span>
              ))}
            </div>
          </>
        )
        : (`Loading....`) }
    </div>
  )
}