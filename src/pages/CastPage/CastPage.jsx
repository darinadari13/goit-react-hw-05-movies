import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';
import Cast from 'components/Cast/Cast';

export default function CastDetails() {  
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setCast)
      .catch(err => setError(err.message))
  }, [movieId]);


  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
      <section>
        {cast && <Cast cast={cast} />}
      </section>
    </>
  );
}