import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import WebFont from 'webfontloader';
import { BrowserRouter } from 'react-router-dom';
import { App } from './containers';

WebFont.load({
  google: {
    families: ['Questrial']
  }
});

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App/>
  </BrowserRouter>, document.getElementById('root')
);
serviceWorker.register();
