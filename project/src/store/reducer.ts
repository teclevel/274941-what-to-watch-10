import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { changeGenre, filterOfGenre, getListFilms } from './action';


// function getListFiltered(list: Films, genreName: string): Films {
//   return list.filter((film) => film.genre === genreName);
// }

// const filmsFiltered = getListFiltered(films, genreCurrent);

export const initialState = {
  genre: 'All genres',
  films: films
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getListFilms, (state) => {
      state.films = films;
    });
    // addCase(filterOfGenre, (state)=> {
    //   state.films
    // });
});

