import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Ошибка 404. Страница не найдена!</h1>
      <p>
        <Link to={AppRoute.Main}>Перейти на главную страницу.</Link >
      </p>
    </div>
  );
}

export default NotFoundPage;
