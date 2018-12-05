import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

import * as Reducers from './redux/reducers';
import { App } from './containers';

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
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

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>, document.getElementById('root')
);
serviceWorker.register();
