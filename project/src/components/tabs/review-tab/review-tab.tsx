import { useAppSelector } from '../../../hooks';
import ReviewCol from '../review-col/review-col';


function ReviewTab(): JSX.Element {
  const comments = useAppSelector((state) => state.comments);
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
