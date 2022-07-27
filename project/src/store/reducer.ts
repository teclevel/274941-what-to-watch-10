import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { Films } from '../types/films';
import { getGenre, getListFilms } from './action';




const genres = getListGenres(films);

export const initialState = {
  genre: 'ALL_GENRES',
  films: films
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getGenre, (state) => {
      state.genre = genre;
    })
    .addCase(getListFilms, (state) => {
      state.films = films;
    });
});

