import {
  changeGenre, filterByGenre, loadFilms, loadPromo,
  requireAuthorization, setDataLoadedStatus, setError,
  resetFilter,
  loadMoreFilms,
} from './action';
import { Films} from '../types/films';
import { InitialState } from '../types/initialState';
import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES, AuthorizationStatus, FILMS_PER_PAGE } from '../const';


function getListFiltered(list: Films, genreName: string): Films {
  if (genreName === ALL_GENRES) {
    return list;
  }
  return list.filter((film) => film.genre === genreName);
}

export const initialState: InitialState = {
  rawFilms: [],
  films: [],
  filteredFilms: [],
  renderedFilmsCount: FILMS_PER_PAGE,
  filter: {
    genre: ALL_GENRES,
  },
  promo: undefined,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.rawFilms = action.payload;
      state.films = getListFiltered(state.rawFilms, state.filter.genre).slice(0, state.renderedFilmsCount);
      state.filteredFilms = getListFiltered(state.rawFilms, state.filter.genre);
    })

    .addCase(loadMoreFilms, (state) => {
      state.films = state.films.slice(0, state.renderedFilmsCount + FILMS_PER_PAGE);
      state.renderedFilmsCount += FILMS_PER_PAGE;
    })

    .addCase(changeGenre, (state, action) => {
      state.filter.genre = action.payload;
    })

    .addCase(resetFilter, (state) => {
      state.filter = {
        genre: ALL_GENRES,
      };
      state.renderedFilmsCount = FILMS_PER_PAGE;
      state.films = getListFiltered(state.rawFilms, state.filter.genre).slice(0, state.renderedFilmsCount);
    })

    .addCase(filterByGenre, (state) => {
      state.filteredFilms = getListFiltered(state.rawFilms, state.filter.genre);
      state.films = getListFiltered(state.rawFilms, state.filter.genre).slice(0, state.renderedFilmsCount);
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
