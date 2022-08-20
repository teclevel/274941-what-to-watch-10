import { FormEvent, Fragment, useState, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { fetchCommentSendAction } from '../../store/api-actions';

const stars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function Form() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialState = {
    id: id,
    comment: '',
    rating: 0
  };

  const [formData, setFormData] = useState(initialState);

  const submitFormHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchCommentSendAction(formData));
    navigate(`${APIRoute.Films}/${id}`);
    setFormData(initialState);
  };

  const changeRatingHandle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const changeReviewHandle = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form action="#" className="add-review__form" onSubmit={submitFormHandle}>
      <div className="rating">
        <div className="rating__stars">
          {
            stars.map((star) => (
              <Fragment key={star}>
                <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star}
                  onChange={changeRatingHandle}
                />
                <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
              </Fragment>
            ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="comment" id="review-text" placeholder="Review text" value={formData.comment}
          onChange={changeReviewHandle}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>

    </form>
  );
}

export default Form;
