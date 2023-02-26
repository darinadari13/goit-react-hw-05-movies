import {useState, useEffect} from 'react';
import Loader from 'components/Loader';
import MoviesList from 'components/MovieList/MovieList';
import {getTrendingMovies} from 'services/api';

export default function HomePage() {  
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    
    getTrendingMovies()
      .then(setMovies)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, []);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
    <h1>Trending Movies</h1>
      <section>
        {movies.length && <MoviesList movies={movies} />}
      </section>
      {loading && <Loader />}
    </>
  );
}


