import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import Review from 'components/Reviews/Review';
import Loader from 'components/Loader';

export default function Reviews() {  
  const { movieId } = useParams();

  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true)
    getMovieReviews(movieId)
      .then(setReview)
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
        {review.length === 0 ? <span>Sorry, there is no reviews</span> : review && <Review review={review} />}
      </section>
      {loading && <Loader />}
    </>
  );
}