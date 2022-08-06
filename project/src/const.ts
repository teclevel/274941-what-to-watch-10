export const ALL_GENRES = 'All genres';

export const BACKEND_URL = 'https://10.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'What-to-watch-token';
export const TIMEOUT_SHOW_ERROR = 2000;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  MyList = '/my-list',
  Player = '/player/:id',
  NotFound = '*'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Film = '/films/{filmId}',
  FilmSimilar = '/films/{filmId}/similar',
  Promo='/promo',
  Favorite='/favorite/FilmId/status',
  Comments='/comments/filmId',
}

