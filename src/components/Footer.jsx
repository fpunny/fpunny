import React from 'react';
import '../styles/components/footer.css';

const ICONS = [
  { type: "b", icon: "facebook", link: "https://facebook.com" },
  { type: "b", icon: "linkedin", link: "https://linkedin.com" },
  { type: "b", icon: "github", link: "https://github.com" }
]

export const Footer = () => (
  <footer className="footer">
    <div className="footer__section footer__section--contact">
      <span className="footer__header">Let's get in touch</span>
      <a className="footer__link footer__link--email" href="mailto:frederic.pun@mail.utoronto.ca">frederic.pun@mail.utoronto.ca</a>
    </div>
    <ul className="footer__section footer__section--icons">
      {
        ICONS.map(({ type, icon, link }, key) =>
          <li key={key} className="footer__icon-item">
            <a className="footer__link" href={link}>
              <i className={`footer__icon fa${type} fa-${icon}`} />
            </a>
          </li>
        )
      }
    </ul>
  </footer>
)