import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { toggleMobile } from '../redux/actions/nav';
import { connect } from 'react-redux';
import { LogoWhiteText } from '../assets';
import { MobileNav } from '.';
import { Link } from '../components';
import '../styles/containers/nav.css';

class _Nav extends PureComponent {

  toggleNav = () => this.props.toggleMobile();

  render() {
    const { items, active, show } = this.props;
    return <nav className="nav">
      <div className="nav__wrapper--logo">
        <Link to="/" className="nav__logo" isActive={active === "/"}>
          <img className="nav__logo-image" src={LogoWhiteText} width="70" height="70" alt="Logo" />
        </Link>
      </div>
      <button onClick={this.toggleNav} className="nav__menu">
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
  show: state.nav.show
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMobile
}, dispatch);

export const Nav = connect(mapStateToProps, mapDispatchToProps)(_Nav);