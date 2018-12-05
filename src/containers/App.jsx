import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Async } from '../components';
import { Nav, Footer, Swipe } from '../containers';
import { NotFound } from '../pages';
import { PAGES, TRANSITION_DELAY } from '../values';
import '../styles/components/async.scss';
import '../styles/index.scss';

library.add(faFacebook, faLinkedin, faGithub, faAngleLeft, faAngleRight);
const LEN = process.env.PUBLIC_URL.length;
const async = loader => () => {
  const Component = lazy(loader);
  return <Suspense fallback={<Async/>}>
    <Component/>
  </Suspense>
};
export const getPath = () => window.location.pathname.slice(LEN);

class _App extends Component {

  componentDidMount() {
    const redirect = window.location.search.split("=");
    if (redirect[0] === "?redirect") {
      this.props.push(redirect[0].split('&'));
    }
  }

  render() {
    const active = getPath();
    return (
      <Swipe>
        <Nav delay={TRANSITION_DELAY} items={PAGES} active={active}/>
        <Switch>
          {
            PAGES.map(({ path, loader }, key) => 
              <Route path={path} key={key} component={async(loader)} exact/>
            )
          }
          <Route path="/resume.pdf" onEnter={() => window.reload()} exact/>
          <Route component={async(NotFound)}/>
        </Switch>
        <Footer/>
      </Swipe>
    );
  }
}

export const App = withRouter(_App);
