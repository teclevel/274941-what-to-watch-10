import { AuthorizationStatus } from '../const';
import { Film, Films } from './films';
import { Reviews } from './reviews';


type Filter = {
  genre: string;
}

export type InitialState = {
  rawFilms: Films,
  films: Films,
  film: undefined | Film,
  renderedFilmsCount: number;
  filter: Filter;
  filteredFilms: Films,
  promo: undefined | Film,
  authorizationStatus: AuthorizationStatus
  isDataLoaded: boolean,
  error: string | null,
  comments: Reviews,
}
