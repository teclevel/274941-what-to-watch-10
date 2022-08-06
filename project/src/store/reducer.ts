import {
  changeGenre, filterOfGenre as filterByGenre, loadFilms, loadPromo,
  requireAuthorization, setDataLoadedStatus, setError,
  resetFilter
} from './action';
import { Film, Films } from '../types/films';
import { InitialState } from '../types/initialState';
import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES, AuthorizationStatus } from '../const';


function getListFiltered(list: Films, genreName: string): Films {
  if (genreName === ALL_GENRES) {
    return list;
  }
  return list.filter((film) => film.genre === genreName);
}

const FILMS_PER_PAGE = 8;


export const initialState: InitialState = {
  rawFilms: [],
  films: [],
  filter: {
    genre: ALL_GENRES,
  },
  promo: {} as Film,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.filter.genre = action.payload;
    })
    .addCase(resetFilter, (state) => {
      state.filter = {
        genre: ALL_GENRES,
      };
    })
    .addCase(filterByGenre, (state) => {
      state.films = getListFiltered(state.rawFilms, state.filter.genre);
    })
    .addCase(loadFilms, (state, action) => {
      state.rawFilms = action.payload;
      state.films = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
