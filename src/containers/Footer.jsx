import React from 'react';
import { INFO } from '../values';
import '../styles/containers/footer.css';

const ICONS = [
  INFO.Facebook,
  INFO.Linkedin,
  INFO.Github
]

export const Footer = () => (
  <footer className="footer">
    <div className="footer__section footer__section--contact">
      <span className="footer__header">Let's get in touch</span>
      <a className="footer__link footer__link--email" href={ INFO.Email.link }>{ INFO.Email.text }</a>
    </div>
    <ul className="footer__section footer__section--icons">
      {
        ICONS.map(({ type, icon, link, alt }, key) =>
          <li key={key} className="footer__icon-item">
            <a className="footer__link" aria-label={alt} href={ link }>
              <i className={`footer__icon fa${ type } fa-${ icon }`} />
            </a>
          </li>
        )
      }
    </ul>
  </footer>
)