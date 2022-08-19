import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import {
  loadComments, loadFilm, loadFilms, loadPromo, loadSimilarFilms, redirectToRoute,
  requireAuthorization, setCommentsLoadedStatus, setDataLoadedStatus,
  setFilmLoadedStatus, setPromoLoadedStatus, setSimilarFilmsLoadedStatus
} from './action';


export const fetchLoadFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoadedStatus(false));
    const { data } = await api.get<Films>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(true));
  },
);

export const fetchLoadSimilarFilmsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (id, { dispatch, extra: api }) => {
    dispatch(setSimilarFilmsLoadedStatus(false));
    const { data } = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilarFilms(data));
    dispatch(setSimilarFilmsLoadedStatus(true));
  },
);

export const fetchLoadPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchLoadPromo',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setPromoLoadedStatus(false));
    const { data } = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromo(data));
    dispatch(setPromoLoadedStatus(true));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchLoadCommentsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchLoadComment',
  async (id, { dispatch, extra: api }) => {

    dispatch(setCommentsLoadedStatus(false));
    const { data } = await api.get<Reviews>(`${APIRoute.Comments}${id}`);
    dispatch(loadComments(data));
    dispatch(setCommentsLoadedStatus(true));
  },
);

export const fetchLoadFilmAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchLoadFilm',
  async (id, { dispatch, extra: api }) => {
    dispatch(setFilmLoadedStatus(false));
    const { data } = await api.get<Film>(`${APIRoute.Film}${id}`);
    dispatch(loadFilm(data));
    dispatch(setFilmLoadedStatus(true));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
