import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

import * as Reducers from './redux/reducers';
import { Home, About, Work, Contact } from './pages';
import { App } from './containers';

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(
    combineReducers(Reducers)
  ),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
);

export const PAGES = [
  { text: "Home", path: "/", loader: Home },
  { text: "About", path: "/about", loader: About },
  { text: "Resume", path: "/work", loader: Work },
  { text: "Contact", path: "/contact", loader: Contact }
];
export const TRANSITION_DELAY = 600;

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
    <App/>
  </ConnectedRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
