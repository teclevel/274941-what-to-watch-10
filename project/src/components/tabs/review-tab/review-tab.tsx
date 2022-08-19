import { useAppSelector } from '../../../hooks';
import LoadingScreen from '../../../pages/loading-screen/loading-screen';
import ReviewCol from '../review-col/review-col';

function ReviewTab(): JSX.Element {

  const { isDataLoaded, comments } = useAppSelector((state) => state);

  const evenComments = comments.filter((comment, index) => index % 2 === 0);
  const oddComments = comments.filter((comment, index) => index % 2 !== 0);

  if (!isDataLoaded) {
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
