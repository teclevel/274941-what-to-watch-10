import { createAction } from '@reduxjs/toolkit';

const changeGenre = createAction('main/changeGenre', (value) => (
  {
    payload: value,
  }
));

const getListFilms = createAction('main/getListFilms');
const filterOfGenre = createAction('main/filterOfGenre');
const resetFilter = createAction('main/resetFilter');

export { changeGenre, getListFilms, filterOfGenre, resetFilter };
