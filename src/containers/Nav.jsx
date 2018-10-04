import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { toggleMobile } from '../redux/actions/nav';
import { connect } from 'react-redux';
import { LogoWhiteText } from '../assets';
import { MobileNav } from '.';
import { Link } from '../components';
import { toggleNav } from '../redux/actions/nav';
import '../styles/containers/nav.scss';

const DELTA = 10;
class _Nav extends PureComponent {

  scrolled = false;
  toggleNav = () => this.props.toggleMobile();
  handleScroll = (e) => {
    const { toggleNav } = this.props;
    const Y = e.currentTarget.scrollY;

    if (!this.scrolled && Y > DELTA) {
      this.scrolled = true;
      toggleNav(true);
    } else if (this.scrolled && Y <= DELTA) {
      this.scrolled = false;
      toggleNav(false);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { items, active, show, scrolled } = this.props;
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
          items.map(({ text, path }, key) => <this.NavItem path={path} key={key}>{ text }</this.NavItem>)
        }
      </ul>
      <MobileNav items={items} show={show} active={active}/>
    </nav>
  }

  NavItem = ({ path, children }) => {
    const isActive = path === this.props.active;
    return <li className={`nav__item${isActive ? " nav__item--active" : ""}`}>
      <Link to={path} className="nav__link" isActive={isActive}>{ children }</Link>
    </li>
  }
}

const mapStateToProps = state => ({
  show: state.nav.show,
  scrolled: state.nav.scrolled
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMobile,
  toggleNav
}, dispatch);

export const Nav = connect(mapStateToProps, mapDispatchToProps)(_Nav);