import { useAppSelector } from '../../../hooks';
import LoadingScreen from '../../../pages/loading-screen/loading-screen';
import ReviewCol from '../review-col/review-col';

function ReviewTab(): JSX.Element {

  const { isCommentsLoaded } = useAppSelector((state) => state);

  const reviews = useAppSelector((state) => state.comments);

  const evenComments = reviews.filter((comment, index) => index % 2 === 0);
  const oddComments = reviews.filter((comment, index) => index % 2 !== 0);

  if (!isCommentsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="film-card__reviews film-card__row">
      <ReviewCol comments={evenComments} />
      <ReviewCol comments={oddComments} />
    </div>
  );
}

export default ReviewTab;
