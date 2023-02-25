import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import css from './MoviesListItem.module.css';

export default function MoviesListItem({ movie }) {
  const url = `/movies/${movie.id}`

  return <li key={movie.id}><Link to={url}>{movie.title}</Link></li>;
};

MoviesListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};