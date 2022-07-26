import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { changeGenre } from './action';

export const initialState = {
  genre: 'ALL_GENRES',
  list: films
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state) => {
      state.genre = state.genre + 1;
    });
});

