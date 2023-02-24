import PropTypes from 'prop-types';
import MoviesListItem from '../MoviesListItem/MoviesListItem'
import css from './MovieList.module.css';


export default function MoviesList({ movies }) {
  return (
    <div className={css.container}>
      <ul className={css.moviesList}>
        {movies.map((movie) => <MoviesListItem key={movie.id} movie={movie} />)}
      </ul>
    </div>
  );
};

MoviesList.propType = {
  movies: PropTypes.array.isRequired,
};

