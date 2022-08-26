import { NameSpace } from '../../const';
import { Films } from '../../types/films';
import { State } from '../../types/state';

export const getFilms = (state: State): Films => state[NameSpace.FilmScreening].films;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.FilmScreening].isDataLoaded;

export const getFilteredFilms = (state: State): Films => state[NameSpace.FilmScreening].filteredFilms;
export const getGenreCurrent = (state: State): string => state[NameSpace.FilmScreening].filter.genre;
