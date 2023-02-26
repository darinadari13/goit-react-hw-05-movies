import { getMovieByQuery } from 'services/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MovieList/MovieList';
import Loader from 'components/Loader';

export default function Movies() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');


  useEffect(()=> {
    if(!query)
    return;
    setLoading(true);
    getMovieByQuery(query)
    .then(setMovies)
    .catch(err => setError(err.message))
    .finally(() => setLoading(false))
},[query]);


useEffect(() => {
  if (!error) return;
  alert(error);
}, [error]);

return (
  <>
    <section>
    <SearchForm />
    {movies && <MoviesList movies={movies} />}
    </section>
    {loading && <Loader />}
  </>
)
}