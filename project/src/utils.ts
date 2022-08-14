import { AuthorizationStatus, LevelFilm, LevelFilmRange } from './const';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const isCheckedLogin = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Auth;


export const getLevelFilm = (level: number) => {
  if (level >= LevelFilmRange.BAD.Max && level <= LevelFilmRange.BAD.MAX) {
    return LevelFilm.BAD;
  }
  if (level > LevelFilmRange.NORMAL.MIN && level <= LevelFilmRange.NORMAL.MAX) {
    return LevelFilm.NORMAL;
  }
  if (level > LevelFilmRange.GOOD.MIN && level <= LevelFilmRange.GOOD.MAX) {
    return LevelFilm.GOOD;
  }
  if (level > LevelFilmRange.VERY_GOOD.MIN && level <= LevelFilmRange.VERY_GOOD.MAX) {
    return LevelFilm.VERY_GOOD;
  }
  if (level > LevelFilmRange.AWESOME.MIN) {
    return LevelFilm.AWESOME;
  }
};
