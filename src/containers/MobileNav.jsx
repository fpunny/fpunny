import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { INFO } from '../values';
import { Link, HiddenLink } from '../components';
import '../styles/containers/mobileNav.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMobile } from '../redux/actions/nav';

const ICONS = [
  INFO.Facebook,
  INFO.Linkedin,
  INFO.Github
]
class _MobileNav extends PureComponent {

  toggleNav = async () => this.props.toggleMobile()

  render() {
    const { items, show } = this.props;
    return <div className={`mobile${show? " mobile--show": ""}`}>
      <ul className="mobile__items">
        {
          items.map(({ text, path }, key) => <this.Item path={path} key={key}>{text}</this.Item>)
        }
      </ul>
      <div className="mobile__content">
        <div className="mobile__section mobile__section--left">
          <span className="mobile__header">Let's get in touch</span>
          <a className="mobile__link mobile__link--email" href={INFO.Email.link}>{INFO.Email.text}</a>
        </div>
        <ul className="mobile__section mobile__section--right">
          {
            ICONS.map(({ type, icon, link, alt }, key) =>
              <li key={key} className="mobile__icon-item">
                <HiddenLink className="mobile__link" aria-label={alt} href={link}>
                  <FontAwesomeIcon className="mobile__icon" icon={[type, icon]} />
                </HiddenLink>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  }

  Item = ({ path, children }) => {
    const { active } = this.props;
    const isActive = path === active;
    return <li onClick={isActive? null: this.toggleNav} className={`mobile__item${isActive ? " mobile__item--active" : ""}`}>
      <Link to={path} className="mobile__link" isActive={isActive}>{children}</Link>
    </li>
  }
}

const mapStateToProps = state => ({
  show: state.nav.show
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMobile
}, dispatch);

export const MobileNav = connect(mapStateToProps, mapDispatchToProps)(_MobileNav);