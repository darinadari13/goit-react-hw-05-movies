import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';
import Cast from 'components/Cast/Cast';
import Loader from 'components/Loader';

export default function CastDetails() {  
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getMovieCredits(movieId)
      .then(setCast)
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
        {cast && <Cast cast={cast} />}
      </section>
      {loading && <Loader />}
    </>
  );
}