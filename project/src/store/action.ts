import { createAction } from '@reduxjs/toolkit';

const getGenre = createAction('GET_GENRES');
const getListFilms = createAction('GET_LIST_FILMS');

export {getGenre, getListFilms};
