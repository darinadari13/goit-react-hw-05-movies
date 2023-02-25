import PropTypes from 'prop-types';
import css from './Review.module.css';

export default function ReviewItem({ review }) {
  const { author, content } = review;

  return (
    <li className={css.listItem}>
      <span className={css.author}>Author: {author}</span>
      <span>{content}</span>
    </li>
  )

}

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
};