import PropTypes from 'prop-types';
import css from './MovieDetailsItem.module.css';
import { Link, useLocation } from "react-router-dom";
import img from '../../img/image-not-available.png';

export default function MoviesDetailsItem({movie}) {
  const location = useLocation();

  const from = location.state?.from ?? '/';

  const {poster_path, title, release_date, vote_average, overview, genres} = movie;
  const movieGenres = genres.map(genre => genre.name).join(', ');


  return (
    <div>
      <div className={css.container}>
      <div className={css.flexContainer}>
        <img
          className={css.poster}
          src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : img }
          alt={title}
        />
        <div className={css.description}>
        <h2>{title} ({release_date.slice(0, 4)})</h2>
        <p>Vote average: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
        </div>
        </div>
      </div>
      <span>Additional information</span>
      <ul>
          <li><Link to={'cast'} state={{from}}>Cast</Link></li>
          <li><Link to={'reviews'} state={{from}}>Reviews</Link></li>
      </ul>
    </div>
  )
};


MoviesDetailsItem.propTypes = {
  movie: PropTypes.object.isRequired,
};