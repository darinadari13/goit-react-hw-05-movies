import PropTypes from 'prop-types';
import css from './Cast.module.css';
import CastItem from './CastItem';

export default function Cast({ cast }) {
  return (
    <ul className={css.list}>
      {cast.map((actor) => <CastItem key={actor.id} actor={actor} />)}
    </ul>
  )

}

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
};

