export const ALL_GENRES = 'All genres';
export const FILMS_PER_PAGE = 8;

export const BACKEND_URL = 'https://10.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'What-to-watch-token';
export const TIMEOUT_SHOW_ERROR = 2000;

export const TABS = ['Overview', 'Details', 'Reviews'];

export enum Tab {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews'
}

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
  Promo = '/promo',
  Favorite = '/favorite/FilmId/status',
  Comments = '/comments/',
}

export enum LevelFilm {
  BAD = 'Bad',
  NORMAL = 'Normal',
  GOOD = 'Good',
  VERY_GOOD = 'Very good',
  AWESOME = 'Awesome',
}

export const LevelFilmRange = {
  BAD: {
    Max: 0,
    MAX: 3
  },
  NORMAL: {
    MIN: 3,
    MAX: 5
  },
  GOOD: {
    MIN: 5,
    MAX: 8
  },
  VERY_GOOD: {
    MIN: 8,
    MAX: 10
  },
  AWESOME: {
    MIN: 10
  },
};
