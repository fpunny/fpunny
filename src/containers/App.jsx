import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav, Async, Footer } from '../components';
import { PAGES, TRANSITION_DELAY } from '..';
import '../styles/index.css';

const len = process.env.PUBLIC_URL.length;
export class App extends Component {
  render() {
    const active = window.location.pathname.slice(len);
    return (
      <Fragment>
        <Nav delay={TRANSITION_DELAY} items={PAGES} active={active}/>
        <Switch>
          {
            PAGES.map(({ path, loader }, key) => 
              <Route path={path} key={key} component={() => <Async loader={loader}/>} exact/>
            )
          }
        </Switch>
        <Footer/>
      </Fragment>
    );
  }
}
