import PropTypes from 'prop-types';
import css from './Cast.module.css';

export default function CastItem({ actor }) {
  const { name, character, profile_path } = actor

  return (
    <li className={css.listItem}>
      <img 
        src={`https://image.tmdb.org/t/p/w300${profile_path}`}
        alt={name}
      />
      <span>{name}</span>
      <span>Charecter: {character}</span>
    </li>
  )

}

CastItem.propType = {
  actor: PropTypes.object.isRequired,
};