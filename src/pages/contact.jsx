import React, { memo } from 'react';
import { HiddenLink } from '../components';
import { Page } from '../containers';
import { INFO } from '../values';
import '../styles/pages/contact.scss';

const ITEMS = Object.keys(INFO);
const LIST_ITEM = (tag, key) => {
  const { link, text, alt } = INFO[tag];
  return <li className="contact__item" key={key}>
    <h2 className="contact__item-header">{ tag }</h2>
    <HiddenLink className="contact__item-link" alt={alt} href={link}>
      { text ? text : link }
    </HiddenLink>
  </li>
}

const Contact = memo(() => (
  <Page block="contact">
    <h1 className="contact__header">Contact</h1>
    <ul className="contact__items">{ ITEMS.map(LIST_ITEM) }</ul>
    <div className="contact__content">
      <p className="contact__text">I'm always open to talk about anything from internships to just a simple hello.</p>
      <p className="contact__text">Just leave me a message, and I'll reply as soon as possible.</p>
    </div>
  </Page>
));

export default Contact;