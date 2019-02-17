import React, { memo, useEffect, useState } from 'react';
import { LogoWhiteText } from '../assets';
import { MobileNav } from '.';
import { Link } from '../components';
import '../styles/containers/nav.scss';

const DELTA = 10;
const _HandleScroll = ([scrolled, setScrolled]) => {
  const y = window.scrollY;
  if (!scrolled && y > DELTA) {
    setScrolled(true);
  } else if (scrolled && y <= DELTA) {
    setScrolled(false);
  }
};

const NavItem = ({ path, children, active }) => {
  const isActive = path === active;
  return <li className={`nav__item${isActive ? " nav__item--active" : ""}`}>
    <Link to={path} className="nav__link" isActive={isActive}>{ children }</Link>
  </li>
};

const _useEffect = (handleScroll, toggleNav) => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("onDoubleTap", toggleNav);
  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("onDoubleTap", toggleNav);
  };
}

export const Nav = memo(({ items, active }) => {
  const scrolledState = useState(false);
  const [show, setShow] = useState(false);

  const toggleNav = () => setShow(!show);
  const handleScroll = () => _HandleScroll(scrolledState);
  
  const [scrolled] = scrolledState;
  useEffect(() => _useEffect(handleScroll, toggleNav));

  return (
    <nav className={`nav${ scrolled? " nav--scrolled": "" }${ show? " nav--show": "" }`}>
      <div className="nav__wrapper--logo">
        <Link to="/" className="nav__logo" isActive={ active === "/" }>
          <img className="nav__logo-image" src={ LogoWhiteText } width="70" height="70" alt="Logo" />
        </Link>
      </div>
      <button aria-label="Navigation menu" type="button" onClick={ toggleNav } className="nav__menu">
        <span className="nav__bar nav__bar--first" />
        <span className="nav__bar nav__bar--second" />
        <span className="nav__bar nav__bar--third" />
      </button>
      <ul className="nav__items">
        {
          items.map(({ text, path }, key) => (
            <NavItem path={ path } active={ active } key={ key }>{ text }</NavItem>
          ))
        }
      </ul>
      <MobileNav toggle={ toggleNav } items={ items } show={ show } active={ active }/>
    </nav>
  );
});