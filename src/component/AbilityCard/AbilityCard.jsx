import React from 'react';
import './abilityCard.scss';

export const AbilityCard = ({ imgUrl, pokemonName, pokemonStats }) => {
  const {
    name,
    types,
    weight,
    moves,
    stats,
  } = pokemonStats;

  const findStat = (statName) => {
    return stats.find(stat => stat.stat.name === statName);
  }

  console.log(findStat('attack'));

  return (
  <div>
    <img
      src={imgUrl}
      alt="pokemon"
      className="abilityCard__img"
    />
    <strong>{name}</strong>
    <table>
      <tr>
        <td>Type</td>
        <td>{types.map(type => (
          <span>{type.type.name}</span>
        ))}</td>
      </tr>
      <tr>
        <td>Attack</td>
        <td>{findStat('attack').base_stat}</td>
      </tr>
      <tr>
        <td>Defense</td>
        <td>{findStat('defense').base_stat}</td>
      </tr>
      <tr>
        <td>HP</td>
        <td>{findStat('hp').base_stat}</td>
      </tr>
      <tr>
        <td>SP Attack</td>
        <td>{findStat('special-attack').base_stat}</td>
      </tr>
      <tr>
        <td>SP Defense</td>
        <td>{findStat('defense').base_stat}</td>
      </tr>
      <tr>
        <td>Spead</td>
        <td>{findStat('speed').base_stat}</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>{weight}</td>
      </tr>
      <tr>
        <td>Total Moves</td>
        <td>{moves.length}</td>
      </tr>

    </table>
  </div>);
}