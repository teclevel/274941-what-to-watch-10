import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Error 404. Page not found!</h1>
      <p>
        <Link to={AppRoute.Main}>Go to main page.</Link >
      </p>
    </div>
  );
}

export default NotFoundPage;
