import React, { PureComponent } from 'react';
import { LogoWhiteText } from '../assets';
import { Link } from '.';
import '../styles/components/nav.css';

export class Nav extends PureComponent {
  render() {
    const { items, active } = this.props;
    return <nav className="nav">
      <div className="nav__wrapper--logo">
        <Link to="/" className="nav__logo" isActive={active === "/"}>
          <img className="nav__logo-image" src={LogoWhiteText} width="70" height="70" alt="Logo" />
        </Link>
      </div>
      <ul className="nav__items">
        {
          items.map(({ text, path }, key) => <this.NavItem path={path} key={key}>{ text }</this.NavItem>)
        }
        <li className="nav__menu">
          <div className="nav__bar nav__bar--first"/>
          <div className="nav__bar nav__bar--second"/>
          <div className="nav__bar nav__bar--third"/>
        </li>
      </ul>
    </nav>
  }

  NavItem = ({ path, children }) => {
    const isActive = path === this.props.active;
    return <li className={`nav__item${isActive ? " nav__item--active" : ""}`}>
      <Link to={path} className="nav__link" isActive={isActive}>{ children }</Link>
    </li>
  }
}