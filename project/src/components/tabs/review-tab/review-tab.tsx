import { Reviews } from '../../../types/reviews';
import ReviewCol from '../review-col/review-col';

type ReviewTabProps={
  comments: Reviews;
}

function ReviewTab({comments}:ReviewTabProps): JSX.Element {

  const evenComments = comments.filter((comment, index) => index % 2 === 0);
  const oddComments = comments.filter((comment, index) => index % 2 !== 0);

  return (
    <div className="film-card__reviews film-card__row">
      <ReviewCol comments={evenComments} />
      <ReviewCol comments={oddComments} />
    </div>
  );
}

export default ReviewTab;
