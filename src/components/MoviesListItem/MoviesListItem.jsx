import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";


export default function MoviesListItem({ movie }) {
  const location = useLocation();
  const url = `/movies/${movie.id}`

  return <li key={movie.id}><Link to={url} state={{from: location}}>{movie.title}</Link></li>;
};

MoviesListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};