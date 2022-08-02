import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Film, Films } from '../types/films';


const changeGenre = createAction('main/changeGenre', (value) => (
  {
    payload: value,
  }
));

const filterOfGenre = createAction('main/filterOfGenre');
const resetFilter = createAction<Films>('main/resetFilter');
const loadFilms = createAction<Films>('data/loadFilms');
const loadPromo = createAction<Film>('data/loadPromo');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setError = createAction<string | null>('main/setError');
const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export { loadFilms, loadPromo, requireAuthorization, changeGenre, filterOfGenre, resetFilter, setError, setDataLoadedStatus };
