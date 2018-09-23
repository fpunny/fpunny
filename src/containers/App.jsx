import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Async } from '../components';
import { Nav, Footer } from '../containers';
import { PAGES, TRANSITION_DELAY } from '../values';
import '../styles/index.css';

const len = process.env.PUBLIC_URL.length;

export const getPath = () => window.location.pathname.slice(len);

export class App extends Component {
  render() {
    const active = getPath();
    return (
      <Fragment>
        <Nav delay={TRANSITION_DELAY} items={PAGES} active={active}/>
        <Switch>
          {
            PAGES.map(({ path, loader }, key) => 
              <Route path={path} key={key} component={() => <Async loader={loader}/>} exact/>
            )
          }
          <Route path="/TEST" component={() => <Async/>} exact/>
        </Switch>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
