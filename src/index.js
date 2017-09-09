import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './components';
import registerServiceWorker from './registerServiceWorker';
import { theme } from './utils';

const rootElem = document.getElementById('root');

render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Route component={Main} />
    </BrowserRouter>
  </MuiThemeProvider>,
  rootElem
);
registerServiceWorker();
