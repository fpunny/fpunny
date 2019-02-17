import React, { useEffect, Suspense, lazy, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Async } from '../components';
import { Nav, Footer, Swipe } from '../containers';
import { NotFound } from '../pages';
import { PAGES, TRANSITION_DELAY } from '../values';
import '../styles/components/async.scss';
import '../styles/index.scss';

const LEN = process.env.PUBLIC_URL.length;

export const getPath = () => window.location.pathname.slice(LEN);
const async = loader => () => {
  const Component = lazy(loader);
  return <Component/>;
}

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
            PAGES.map(({ path, loader }, key) => 
              <Route path={path} key={key} component={async(loader)} exact/>
            )
          }
          <Route path="/resume.pdf" onEnter={() => window.reload()} exact/>
          <Route component={async(NotFound)}/>
        </Switch>
      </Suspense>
      <Footer/>
      <Swipe/>
    </Fragment>
  );
}

export const App = withRouter(_App);
