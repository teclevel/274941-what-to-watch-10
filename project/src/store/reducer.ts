import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { changeGenre, filterOfGenre, resetFilter} from './action';
import { Films } from '../types/films';
import { ALL_GENRES } from '../const';


function getListFiltered(list: Films, genreName: string): Films {
  return list.filter((film) => film.genre === genreName);
}

export const initialState = {
  genre: ALL_GENRES,
  films: films
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(resetFilter, (state) => {
      state.films = films;
    })
    .addCase(filterOfGenre, (state) => {
      state.films = getListFiltered(state.films, state.genre);
    });
});
