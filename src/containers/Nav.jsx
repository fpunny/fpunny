import React, { PureComponent } from 'react';
import { LogoWhiteText } from '../assets';
import { MobileNav } from '.';
import { Link } from '../components';
import '../styles/containers/nav.scss';

const DELTA = 10;
export class Nav extends PureComponent {

  state = {
    scrolled: false,
    show: false
  }
  toggleNav = async () => this.setState(({ show }) => ({ show: !show }));
  handleScroll = async ({ target }) => {
    const Y = target.scrollY;
    if (!this.scrolled && Y > DELTA) {
      this.setState({ scrolled: true });
    } else if (this.scrolled && Y <= DELTA) {
      this.setState({ scrolled: false });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("onDoubleTap", this.toggleNav);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("onDoubleTap", this.toggleNav);
  }

  render() {
    const { show, scrolled } = this.state;
    const { items, active } = this.props;
    return <nav className={`nav${scrolled? " nav--scrolled": ""}${show? " nav--show": ""}`}>
      <div className="nav__wrapper--logo">
        <Link to="/" className="nav__logo" isActive={active === "/"}>
          <img className="nav__logo-image" src={LogoWhiteText} width="70" height="70" alt="Logo" />
        </Link>
      </div>
      <button aria-label="Navigation menu" type="button" onClick={this.toggleNav} className="nav__menu">
        <span className="nav__bar nav__bar--first" />
        <span className="nav__bar nav__bar--second" />
        <span className="nav__bar nav__bar--third" />
      </button>
      <ul className="nav__items">
        {
          items.map(({ text, path }, key) => <this.NavItem path={ path } key={ key }>{ text }</this.NavItem>)
        }
      </ul>
      <MobileNav toggle={ this.toggleNav } items={ items } show={ show } active={ active }/>
    </nav>
  }

  NavItem = ({ path, children }) => {
    const isActive = path === this.props.active;
    return <li className={`nav__item${isActive ? " nav__item--active" : ""}`}>
      <Link to={path} className="nav__link" isActive={isActive}>{ children }</Link>
    </li>
  }
}