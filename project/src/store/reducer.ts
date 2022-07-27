import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { getGenre, getListFilms } from './action';

export const initialState = {
  genre: 'ALL_GENRES',
  films: films
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getGenre, (state) => {
      state.genre = 'New genre';
    })
    .addCase(getListFilms, (state) => {
      state.films = films;
    });
});

