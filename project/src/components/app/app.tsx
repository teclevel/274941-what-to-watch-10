import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film-page/film-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Film, Films } from '../../types/films';
import { Reviews } from '../../types/reviews';

type AppProps = {
  filmPromo: Film,
  films: Films,
  genres: string[],
  reviews: Reviews
}

function App({ filmPromo, films, genres, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <Main filmPromo={filmPromo} films={films} />
        }
        />

        <Route path={AppRoute.Login} element={<SignIn />} />

        <Route path={AppRoute.Film} element={<FilmPage films={films} reviews={reviews}/>} />

        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <AddReview films={films} />
          </PrivateRoute>
        }
        />

        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyList films={films} />
          </PrivateRoute>
        }
        />

        <Route path={AppRoute.Player} element={<Player films={films} />} />

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />

      </Routes >
    </BrowserRouter >
  );
}

export default App;
