import { AuthorizationStatus } from '../const';
import { Film, Films } from './films';


type Filter = {
  genre: string;
}

export type InitialState = {
  rawFilms: Films,
  films: Films,
  renderedFilmsCount: number;
  filter: Filter;
  filteredFilms: Films,
  promo: undefined | Film,
  authorizationStatus: AuthorizationStatus
  isDataLoaded: boolean,
  error: string | null,
}
