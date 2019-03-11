import React, { useEffect, Suspense, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Async } from '../components';
import { Nav, Footer, Swipe } from '../containers';
import { NotFound } from '../pages';
import { PAGES, TRANSITION_DELAY } from '../values';
import '../styles/index.scss';

const LEN = process.env.PUBLIC_URL.length;

export const getPath = () => window.location.pathname.slice(LEN);

const _App = ({ history }) => {

  useEffect(() => {
    const redirect = window.location.search.split("=");
    if (redirect[0] === "?redirect") {
      history.push(redirect[1]);
    }
  });

  const active = getPath();
  return (
    <Fragment>
      <Nav delay={TRANSITION_DELAY} items={PAGES} active={active}/>
      <Suspense fallback={<Async/>}>
        <Switch>
          {
            PAGES.map(({ path, Component }, key) => 
              <Route path={path} key={key} component={Component} exact/>
            )
          }
          <Route path="/resume.pdf" onEnter={() => window.reload()} exact/>
          <Route component={NotFound}/>
        </Switch>
      </Suspense>
      <Footer/>
      <Swipe/>
    </Fragment>
  );
}

export const App = withRouter(_App);
