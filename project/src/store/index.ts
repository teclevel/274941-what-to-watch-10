import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { reducer } from './reducer';
import {redirect} from './middlewares/redirect';

export const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect),
});

export { store };
