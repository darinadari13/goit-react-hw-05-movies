import {useState, useEffect} from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { getMovieDetails } from 'services/api';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';
import { GoBackButton } from 'components/GoBackButton';


export default function MovieDetails() {  
  const { movieId } = useParams();

  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => setError(err.message))
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
    </>
  );
}