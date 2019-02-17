import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { HiddenLink } from '../components';
import { INFO } from '../values';
import '../styles/containers/footer.scss';

const ICONS = [ INFO.Facebook, INFO.Linkedin, INFO.Github ];
const fa = { faFacebook, faLinkedin, faGithub };

export const Footer = memo(() => (
  <footer className="footer">
    <div className="footer__section footer__section--contact">
      <span className="footer__header">Let's get in touch</span>
      <HiddenLink className="footer__link footer__link--email" href={ INFO.Email.link }>{ INFO.Email.text }</HiddenLink>
    </div>
    <ul className="footer__section footer__section--icons">
      {
        ICONS.map(({ icon, link, alt }, key) =>
          <li key={key} className="footer__icon-item">
            <HiddenLink className="footer__link" alt={alt} href={ link }>
              <FontAwesomeIcon className="footer__icon" icon={fa[icon]} />
            </HiddenLink>
          </li>
        )
      }
    </ul>
  </footer>
));