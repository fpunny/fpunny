import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { INFO } from '../values';
import { Link, HiddenLink } from '../components';
import '../styles/containers/mobileNav.scss';

const ICONS = [INFO.Facebook, INFO.Linkedin, INFO.Github];
const fa = { faFacebook, faLinkedin, faGithub };

const Item = ({ path, index, children, active, toggle }) => {
  const isActive = path === active;
  return (
    <li
      data-key={ index }
      onClick={ toggle }
      className={`mobile__item${ isActive ? " mobile__item--active" : "" }`}
    >
      <Link to={ path } className="mobile__link" isActive={ isActive }>
        { children }
      </Link>
    </li>
  );
};

export const MobileNav = memo(({ items, show, active, toggle }) => (
  <div className={`mobile${ show? " mobile--show": "" }`}>
    <ul className="mobile__items">
      {
        items.map(({ text, path }, key) => (
          <Item
            path={ path } key={ key } index={ key }
            active={ active } toggle={ toggle }
          >
            { text }
          </Item>
        ))
      }
    </ul>
    <div className="mobile__content">
      <div className="mobile__section mobile__section--left">
        <span className="mobile__header">Let's get in touch</span>
        <a className="mobile__link mobile__link--email" href={ INFO.Email.link }>{ INFO.Email.text }</a>
      </div>
      <ul className="mobile__section mobile__section--right">
        {
          ICONS.map(({ icon, link, alt }, key) =>
            <li key={ key } className="mobile__icon-item">
              <HiddenLink className="mobile__link" aria-label={ alt } href={ link }>
                <FontAwesomeIcon className="mobile__icon" icon={fa[icon]} />
              </HiddenLink>
            </li>
          )
        }
      </ul>
    </div>
  </div>
));