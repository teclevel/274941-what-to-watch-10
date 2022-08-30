import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteState } from '../../types/state';
import { fetchLoadFavoriteFilmsAction } from '../api-actions';

const initialState: FavoriteState = {
  favoriteFilms: [],
  favoriteFilmsCount: 0,
};

export const favoriteState = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    changeCountFavoriteFilms: (state) => {
      state.favoriteFilmsCount = state.favoriteFilms.length;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLoadFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      });
  }
});
export const { changeCountFavoriteFilms } = favoriteState.actions;
