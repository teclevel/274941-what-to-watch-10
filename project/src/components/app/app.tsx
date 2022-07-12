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

type AppProps = {
  filmPromo: {
    title: string,
    genre: string,
    release: number
  },
  genres: string[]
}

function App({ filmPromo, genres }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <Main filmPromo={filmPromo} genres={genres} />
        }
        />

        <Route path={AppRoute.Login} element={<SignIn />} />

        <Route path={AppRoute.Film} element={<FilmPage />} />

        <Route path={AppRoute.AddReview} element={<AddReview />} />

        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyList />
          </PrivateRoute>
        }
        />

        <Route path={AppRoute.Player} element={<Player />} />

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />

      </Routes >
    </BrowserRouter >
  );
}

export default App;
