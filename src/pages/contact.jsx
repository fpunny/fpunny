import React from 'react';
import { Page } from '../containers';
import { INFO } from '../values';
import '../styles/pages/contact.css';

const ITEMS = Object.keys(INFO);
const LIST_ITEM = (tag, key) => {
  const { link, text } = INFO[tag];
  return <li className="contact__item" key={key}>
    <h2 className="contact__item-header">{ tag }</h2>
    <a className="contact__item-link" href={link}>
      { text ? text : link }
    </a>
  </li>
}

const Contact = () => (
  <Page block="contact">
    <h1 className="contact__header">Contact</h1>
    <ul className="contact__items">{ ITEMS.map(LIST_ITEM) }</ul>
    <div className="contact__content">
      <p className="contact__text">Professional or casual, I'm always looking forward to talk about anything.</p>
      <p className="contact__text">Just leave me a message, and I'll try to reply ASAP.</p>
    </div>
  </Page>
)

export default Contact;