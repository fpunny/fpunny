import React from 'react';
import { connect } from 'react-redux';
import { INFO } from '../values';
import '../styles/containers/footer.css';

const ICONS = [
  INFO.Facebook,
  INFO.Linkedin,
  INFO.Github
]

const _Footer = ({ scrolled }) => (
  <footer className={`footer${scrolled? " footer--scrolled": ""}`}>
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

const mapStateToProps = state => ({
  scrolled: state.nav.scrolled
});

export const Footer = connect(mapStateToProps)(_Footer);