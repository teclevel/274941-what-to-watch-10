import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';


export const changeGenre = createAction('main/changeGenre', (value: string) => (
  { payload: value, }
));
export const filterByGenre = createAction('main/filterByGenre');
export const resetFilter = createAction('main/resetFilter');
export const resetFilms = createAction('main/resetFilms');
export const renderFilms = createAction('main/renderFilms');
export const loadMoreFilms = createAction('main/loadMoreFilms');
export const setError = createAction<string | null>('main/setError');
export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const loadFilms = createAction<Films>('data/loadFilms');
export const loadPromo = createAction<Film>('data/loadPromo');
export const loadFilm = createAction<Film>('data/loadFilm');
export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');
export const loadComments = createAction<Reviews>('data/loadComments');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const setCommentsLoadedStatus = createAction<boolean>('data/setCommentsLoadedStatus');
export const setFilmLoadedStatus = createAction<boolean>('data/setFilmLoadedStatus');
export const setSimilarFilmsLoadedStatus = createAction<boolean>('data/setSimilarFilmsLoadedStatus');
export const setPromoLoadedStatus = createAction<boolean>('data/setPromoLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

