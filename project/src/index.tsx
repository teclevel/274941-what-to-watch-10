import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { checkAuthAction, fetchLoadFilmsAction, fetchLoadPromoAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter } from 'react-router-dom';

store.dispatch(fetchLoadFilmsAction());
store.dispatch(fetchLoadPromoAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>

      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
