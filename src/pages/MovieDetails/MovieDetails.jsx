import {useState, useEffect} from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { getMovieDetails } from 'services/api';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';
import { GoBackButton } from 'components/GoBackButton';
import Loader from 'components/Loader';

export default function MovieDetails() {  
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    setLoading(true)
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [movieId]);


  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
      <section>
        <GoBackButton />
        {movie && <MovieDetailsItem movie={movie} />}
      </section>
      <Outlet />
      {loading && <Loader />}
    </>
  );
}