import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchLoadCommentsAction } from '../../../store/api-actions';
import ReviewCol from '../review-col/review-col';

function ReviewTab(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLoadCommentsAction(id));
    // eslint-disable-next-line no-console
    return () => { console.log('willUnmount'); };
  }, [dispatch, id]);

  const reviews = useAppSelector((state) => state.comments);

  const evenComments = reviews.filter((comment, index) => index % 2 === 0);
  const oddComments = reviews.filter((comment, index) => index % 2 !== 0);

  return (
    <div className="film-card__reviews film-card__row">
      <ReviewCol comments={evenComments} />
      <ReviewCol comments={oddComments} />
    </div>
  );
}

export default ReviewTab;
