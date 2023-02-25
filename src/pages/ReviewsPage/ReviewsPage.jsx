import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import Review from 'components/Reviews/Review';

export default function Reviews() {  
  const { movieId } = useParams();

  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);



  useEffect(() => {
    
    getMovieReviews(movieId)
      .then(setReview)
      .catch(err => setError(err.message))
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
    </>
  );
}