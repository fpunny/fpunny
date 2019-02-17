import React, { memo } from 'react';
import { Link } from '../components';
import { Page } from '../containers';
import '../styles/pages/404.scss';

const NotFound = memo(() => (
  <Page block="notfound">
    <div className="notfound__content">
      <h1 className="notfound__header">Whoops...</h1>
      <p className="notfound__text">Looks like the page doesn't exist... Come back again when it's closer to it's due date.</p>
    </div>
    <Link className="notfound__link" to="/" alt="Go to Home page">Let's go home</Link>
  </Page>
));

export default NotFound;