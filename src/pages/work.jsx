import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { Page } from '../containers';
import { WORK, TRANSITION_DELAY } from '../values';
import '../styles/pages/work.scss';

const MAX = WORK.length - 1;

const _shift = (i, [index, setIndex], setShift) => {
  if (i !== index) {
    setShift(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.setTimeout(
      () => {
        setShift(false);
        setIndex(i);
      }, TRANSITION_DELAY
    );
  }
};

const _useEffect = (right, left) => {
  window.addEventListener('onSwipeLeft', right);
  window.addEventListener('onSwipeRight', left);
  return () => {
    window.removeEventListener('onSwipeLeft', right);
    window.removeEventListener('onSwipeRight', left);
  }
}

const buildBody = body => (
  typeof(body) === "string" ? <p className="work__item-text">{ body }</p> :
  Array.isArray(body) ? (
    <ul className="work__item-list">
      {
        body.map((item, key) =>
          <li className="work__item-list-item" key={ key }>{ item }</li>
        )
      }
    </ul>
  ) : body
);

const build = ({ header, href, sideheader, subheader, body }, key) => (
  <div key={ key } className="work__item">
    <h3 className="work__item-header">
      { header }
      {
        sideheader?
        <span className="work__item-sideheader"> / { sideheader }</span>:
        null
      }
    </h3>
    { subheader? <h4 className="work__item-subheader">{ subheader }</h4>: null }
    { body? buildBody(body): null }
    {
      href?
      <div className="work__wrapper--item-link">
        <span className="work__item-link-header">Link:</span>
        <a className="work__item-link" href={ href }>{ href }</a>
      </div>: null
    }
  </div>
);

const Work = () => {
  const indexState = useState(0);
  const [ shift, setShift ] = useState(false);
  const [ index ] = indexState;

  const doShift = i => _shift(i, indexState, setShift);
  const left = () => doShift(Math.max(index - 1, 0));
  const right = () => doShift(Math.min(index + 1, MAX));
  useEffect(() => _useEffect(right, left));

  const { title, data } = WORK[index];
  return (
    <Page block="work" className={shift? "work--shift": null}>
      <div className="work__head">
        <div className="work__wrapper--head">
          <h1 className="work__topic">Resume</h1>
          <h2 className="work__header">{ title }</h2>
        </div>
        <ul className="work__controls">
          <li onClick={left} className={`work__control ${index === 0? "work__control--disabled": ""}`}>
            <FontAwesomeIcon className="work__icon" icon={ faAngleLeft } />
            <span className="work__control-text">Prev</span>
          </li>
          <li onClick={right} className={`work__control ${index === MAX ? "work__control--disabled" : ""}`}>
            <span className="work__control-text">Next</span>
            <FontAwesomeIcon className="work__icon" icon={ faAngleRight } />
          </li>
        </ul>
      </div>
      <section className="work__content">
        { data.map((item, key) => build(item, key)) }
      </section>
      <div className="work__wrapper--pdf">
        <a className="work__pdf" href={`${process.env.PUBLIC_URL}/resume.pdf`} aria-label="To PDF of Resume">Want a PDF? Click Here</a>
      </div>
    </Page>
  )
};

export default Work;