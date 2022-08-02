import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, filterOfGenre, loadFilms, loadPromo, requireAuthorization, setDataLoadedStatus, setError, resetFilter } from './action';
import { Film, Films } from '../types/films';
import { ALL_GENRES, AuthorizationStatus } from '../const';


function getListFiltered(list: Films, genreName: string): Films {
  return list.filter((film) => film.genre === genreName);
}

type InitialState = {
  genre: string,
  films: Films,
  filteredFilms:Films,
  promo: Film,
  authorizationStatus: AuthorizationStatus
  isDataLoaded: boolean,
  error: string | null,
}

export const initialState: InitialState = {
  genre: ALL_GENRES,
  films: [],
  filteredFilms: [],
  promo: {} as Film,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(resetFilter, (state) => {
      state.filteredFilms = state.films;
    })
    .addCase(filterOfGenre, (state) => {
      state.filteredFilms = getListFiltered(state.filteredFilms, state.genre);
    })
    .addCase(loadFilms, (state, action) => {
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
