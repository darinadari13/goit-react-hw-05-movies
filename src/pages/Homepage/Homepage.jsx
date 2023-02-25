import {useState, useEffect} from 'react';
import MoviesList from 'components/MovieList/MovieList';
import {getTrendingMovies} from 'services/api';

export default function HomePage() {  
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch(err => setError(err.message))
  }, []);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
     <h1>Trending Movies</h1>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}


