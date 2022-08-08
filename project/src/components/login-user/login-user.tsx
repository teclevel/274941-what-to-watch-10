import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { isCheckedLogin } from '../../utils';

function LoginUser(): JSX.Element {
  const dispatch = useAppDispatch();
  const { authorizationStatus } = useAppSelector((state) => state);
  return (isCheckedLogin(authorizationStatus)
    ?
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to='/'
        >
          Sign out
        </Link>
      </li>
    </ul>
    :
    <div className="user-block">
      <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
    </div>);
}

export default LoginUser;
