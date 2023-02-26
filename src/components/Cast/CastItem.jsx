import PropTypes from 'prop-types';
import css from './Cast.module.css';
import img from '../../img/image-not-available.png';

export default function CastItem({ actor }) {
  const { name, character, profile_path } = actor

  return (
    <li className={css.listItem}>
      <img 
        src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : img}
        alt={name}
      />
      <span>{name}</span>
      <span>Charecter: {character}</span>
    </li>
  )

}

CastItem.propTypes = {
  actor: PropTypes.object.isRequired,
};