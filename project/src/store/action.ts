import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';


export const changeGenre = createAction('main/changeGenre', (value: string) => (
  {
    payload: value,
  }
));

export const filterByGenre = createAction('main/filterByGenre');
export const resetFilter = createAction('main/resetFilter');
export const loadFilms = createAction<Films>('data/loadFilms');
export const renderFilms = createAction('main/renderFilms');
export const loadPromo = createAction<Film>('data/loadPromo');
export const loadFilm = createAction<Film>('data/loadFilm');
export const loadComments = createAction<Reviews>('data/loadComments');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('main/setError');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const loadMoreFilms = createAction('main/loadMoreFilms');
export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');


