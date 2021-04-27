import React from 'react';
import PropTypes from 'prop-types';
import './abilityCard.scss';

export const AbilityCard = ({ imgUrl, pokemonStats }) => {
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

  return (
    <div className="ability_card">
      <img
        src={imgUrl}
        alt="pokemon"
        className="ability_card__img"
      />
      <strong className="ability_card__name">{name}</strong>
      <table className="table is-bordered ability_card__table">
        <tr>
          <td className="table__td">Type</td>
          <td>{types.map(type => (
            <span className="ability_card__type" key={type.slot}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</span>
          ))}</td>
        </tr>
        <tr>
          <td className="table__td">Attack</td>
          <td>{findStat('attack').base_stat}</td>
        </tr>
        <tr>
          <td className="table__td">Defense</td>
          <td>{findStat('defense').base_stat}</td>
        </tr>
        <tr>
          <td className="table__td">HP</td>
          <td>{findStat('hp').base_stat}</td>
        </tr>
        <tr>
          <td className="table__td">SP Attack</td>
          <td>{findStat('special-attack').base_stat}</td>
        </tr>
        <tr>
          <td className="table__td">SP Defense</td>
          <td>{findStat('defense').base_stat}</td>
        </tr>
        <tr>
          <td className="table__td">Speed</td>
          <td>{findStat('speed').base_stat}</td>
        </tr>
        <tr>
          <td className="table__td">Weight</td>
          <td>{weight}</td>
        </tr>
        <tr>
          <td className="table__td">Total Moves</td>
          <td>{moves.length}</td>
        </tr>

      </table>
    </div>
  );
}

AbilityCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  pokemonStats: PropTypes.shape({
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    weight: PropTypes.number.isRequired,
    moves: PropTypes.array.isRequired,
    stats: PropTypes.array.isRequired,
  }).isRequired,
};
