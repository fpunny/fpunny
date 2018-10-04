import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Async } from '../components';
import { Nav, Footer, Swipe } from '../containers';
import { NotFound } from '../pages';
import { PAGES, TRANSITION_DELAY } from '../values';
import '../styles/index.scss';

const LEN = process.env.PUBLIC_URL.length;
export const getPath = () => window.location.pathname.slice(LEN);

export class App extends Component {

  render() {
    const active = getPath();
    return (
      <Swipe>
        <Nav delay={TRANSITION_DELAY} items={PAGES} active={active}/>
        <Switch>
          {
            PAGES.map(({ path, loader }, key) => 
              <Route path={path} key={key} component={() => <Async loader={loader}/>} exact/>
            )
          }
          <Route path="/resume.pdf" onEnter={() => window.reload()} exact/>
          <Route component={() => <Async loader={NotFound}/>}/>
        </Switch>
        <Footer/>
      </Swipe>
    );
  }
}
