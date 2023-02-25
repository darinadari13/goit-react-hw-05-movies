import PropTypes from 'prop-types';
import css from './Review.module.css';
import ReviewItem from './ReviewItem';

export default function Review({ review }) {
  console.log(review);
  return (
    <ul className={css.list}>
      {review.map((rev) => <ReviewItem key={rev.id} review={rev} />)}
    </ul>
  )

}

Review.propTypes = {
  review: PropTypes.array.isRequired,
};

