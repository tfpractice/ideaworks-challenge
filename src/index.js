import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import App from './components';
import registerServiceWorker from './registerServiceWorker';
import { theme } from './utils';

// import { Provider } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';

//
// import { getStore } from '../../imports';
// import { Products } from '../../imports/store';
// import Home from '../components';

// const store = getStore(window.__PRELOADED_STATE__);
const rootElem = document.getElementById('root');

// store.dispatch(Products.actions.getProducts({ start: 0, limit: 8 }));

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  rootElem
);
registerServiceWorker();
