import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { store } from './services/store';
=======
import App from './components/app/app';
>>>>>>> main

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
=======
    <App />
>>>>>>> main
  </React.StrictMode>
);
