import PropTypes from 'prop-types';
import css from './MovieDetailsItem.module.css';

export default function MoviesDetailsItem({movie}) {
const {poster_path, title, release_date, vote_average, overview, genres} = movie;
 const movieGenres = genres.map(genre => genre.name).join(', ');
  return (
    <div>
      <div className={css.container}>
      <div className={css.flexContainer}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
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
    </div>
  )
};