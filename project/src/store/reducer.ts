export{};
// import {
//   changeGenre, filterByGenre, loadFilms, loadPromo,
//   setDataLoadedStatus, requireAuthorization,
//   resetFilter,
//   loadMoreFilms,
//   loadComments,
//   loadFilm,
//   loadSimilarFilms,
//   setCommentsLoadedStatus,
//   resetFilms,
//   setFilmLoadedStatus,
//   setSimilarFilmsLoadedStatus,
//   setPromoLoadedStatus,
//   setFormDisabled,
//   cutFilteredFilms,
// } from './action';
// import { Films } from '../types/films';
// import { createReducer } from '@reduxjs/toolkit';
// import { ALL_GENRES, AuthorizationStatus, FILMS_PER_PAGE } from '../const';
// import { InitialState } from '../types/initialState';


// function getListFiltered(list: Films, genreName: string): Films {
//   if (genreName === ALL_GENRES) {
//     return list;
//   }
//   return list.filter((film) => film.genre === genreName);
// }

// export const initialState: InitialState = {
//   rawFilms: [],                              //fimScreening
//   isDataLoaded: false,
//   films: [],
//   filteredFilms: [],
//   renderedFilmsCount: FILMS_PER_PAGE,
//   filter: {
//     genre: ALL_GENRES,
//   },

//   similarFilms: [],                          //similarFilmsData
//   isSimilarFilmsLoaded: false,

//   film: undefined,                            //filmData
//   isFilmLoaded: false,

//   promo: undefined,                           //PromoData
//   isPromoLoaded: false,

//   comments: [],                               //commentsData
//   isCommentsLoaded: false,

//   isFormDisabled: false,  //stateForm

//   authorizationStatus: AuthorizationStatus.Unknown,
// };


// export const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(loadFilms, (state, action) => {
//       state.rawFilms = action.payload;
//     })

//     // .addCase(resetFilms, (state) => {
//     //   state.filteredFilms = getListFiltered(state.rawFilms, state.filter.genre);
//     // })

//     // .addCase(cutFilteredFilms, (state) => {
//     //   state.films = getListFiltered(state.rawFilms, state.filter.genre).slice(0, state.renderedFilmsCount);
//     // })

//     .addCase(loadSimilarFilms, (state, action) => {
//       state.similarFilms = action.payload;
//     })

//     // .addCase(loadMoreFilms, (state) => {
//     //   state.films = state.films.slice(0, state.renderedFilmsCount + FILMS_PER_PAGE);
//     //   state.renderedFilmsCount += FILMS_PER_PAGE;
//     // })

//     // .addCase(resetFilter, (state) => {
//     //   state.filter.genre = ALL_GENRES;
//     //   state.renderedFilmsCount = FILMS_PER_PAGE;
//     // })

//     // .addCase(changeGenre, (state, action) => {
//     //   state.filter.genre = action.payload;
//     // })

//     // .addCase(filterByGenre, (state) => {
//     //   state.filteredFilms = getListFiltered(state.rawFilms, state.filter.genre);
//     // })

//     .addCase(loadPromo, (state, action) => {
//       state.promo = action.payload;
//     })

//     .addCase(loadFilm, (state, action) => {
//       state.film = action.payload;
//     })

//     .addCase(loadComments, (state, action) => {
//       state.comments = action.payload;
//     })
//     //
//     .addCase(requireAuthorization, (state, action) => {
//       state.authorizationStatus = action.payload;
//     })
//     //

//     .addCase(setDataLoadedStatus, (state, action) => {
//       state.isDataLoaded = action.payload;
//     })

//     .addCase(setCommentsLoadedStatus, (state, action) => {
//       state.isCommentsLoaded = action.payload;
//     })

//     .addCase(setFilmLoadedStatus, (state, action) => {
//       state.isFilmLoaded = action.payload;
//     })

//     .addCase(setPromoLoadedStatus, (state, action) => {
//       state.isPromoLoaded = action.payload;
//     })

//     .addCase(setSimilarFilmsLoadedStatus, (state, action) => {
//       state.isSimilarFilmsLoaded = action.payload;
//     })

//     .addCase(setFormDisabled, (state, action) => {
//       state.isFormDisabled = action.payload;
//     });
// });
