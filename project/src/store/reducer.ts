import { createReducer } from '@reduxjs/toolkit';
// import { films } from '../mocks/films';
import { changeGenre, filterOfGenre, loadFilms, requireAuthorization, setDataLoadedStatus, setError, /* resetFilter */ } from './action';
import { Films } from '../types/films';
import { ALL_GENRES, AuthorizationStatus } from '../const';


function getListFiltered(list: Films, genreName: string): Films {
  return list.filter((film) => film.genre === genreName);
}

type InitialState = {
  genre: string,
  films: Films,
  authorizationStatus: AuthorizationStatus
  isDataLoaded: boolean,
  error: string | null,
}

export const initialState: InitialState = {
  genre: ALL_GENRES,
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    // .addCase(resetFilter, (state) => {
    //   state.films = films;
    // })
    // .addCase(resetFilter, (state, action) => {
    //   state.films = action.payload;
    // })
    .addCase(filterOfGenre, (state) => {
      state.films = getListFiltered(state.films, state.genre);
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
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
