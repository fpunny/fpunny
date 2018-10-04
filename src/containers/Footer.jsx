import React from 'react';
import { HiddenLink } from '../components';
import { INFO } from '../values';
import '../styles/containers/footer.scss';

const ICONS = [
  INFO.Facebook,
  INFO.Linkedin,
  INFO.Github
]

export const Footer = () => (
  <footer className="footer">
    <div className="footer__section footer__section--contact">
      <span className="footer__header">Let's get in touch</span>
      <HiddenLink className="footer__link footer__link--email" href={ INFO.Email.link }>{ INFO.Email.text }</HiddenLink>
    </div>
    <ul className="footer__section footer__section--icons">
      {
        ICONS.map(({ type, icon, link, alt }, key) =>
          <li key={key} className="footer__icon-item">
            <HiddenLink className="footer__link" alt={alt} href={ link }>
              <i className={`footer__icon fa${ type } fa-${ icon }`} />
            </HiddenLink>
          </li>
        )
      }
    </ul>
  </footer>
)