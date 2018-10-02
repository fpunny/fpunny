import React from 'react';
import { Back, BackFallback } from '../assets';
import { Page } from '../containers';
import '../styles/pages/home.css';
import { Link } from '../components';

const Home = () => (
  <Page style={{ backgroundImage: `url('${ Back }'), url('${ BackFallback }')` }} block="home">
    <div className="home__text">
      <h1 className="home__header">Frederic Pun</h1>
      <span className="home__subheader">Yet Another Full-stack Web Developer</span>
    </div>
    <div className="home__wrapper--button">
      <Link to="/about" alt="To about me page" className="home__button">Learn More</Link>
    </div>
  </Page>
)

export default Home;