import { useParams } from 'react-router-dom';
import { Reviews } from '../../types/reviews';

type ReviewProps = {
  reviews: Reviews
}

function ReviewTab({ reviews }: ReviewProps): JSX.Element {

  const { id } = useParams();
  const [review] = reviews.filter((el) => el.id === Number(id));

  const { comment, user, date, rating } = review;
  const { name } = user;
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{name}</cite>
              <time className="review__date" dateTime={date}>{date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{rating}</div>
        </div>

      </div>
      <div className="film-card__reviews-col">

      </div>
    </div>
  );
}

export default ReviewTab;
