import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Page } from '../containers';
import { WORK, TRANSITION_DELAY } from '../values';
import '../styles/pages/work.scss';

const MAX = WORK.length - 1;

export default class Work extends Component {

  state = {
    shift: false,
    index: 0
  }

  componentDidMount() {
    window.addEventListener('onSwipeLeft', this.right);
    window.addEventListener('onSwipeRight', this.left);
  }

  componentWillUnmount() {
    window.removeEventListener('onSwipeLeft', this.right);
    window.removeEventListener('onSwipeRight', this.left);
  }

  left = () => this.shift(Math.max(this.state.index - 1, 0))
  right = () => this.shift(Math.min(this.state.index + 1, MAX))

  shift = index => {
    if (index !== this.state.index) {
      this.setState({ shift: true });
      window.setTimeout(
        () => this.setState({ shift: false, index }),
        TRANSITION_DELAY
      );
    }
  }

  render() {
    const { shift, index } = this.state;
    const { title, data } = WORK[index];
    return <Page block="work" className={shift? "work--shift": null}>
      <div className="work__head">
        <div className="work__wrapper--head">
          <h1 className="work__topic">Resume</h1>
          <h2 className="work__header">{ title }</h2>
        </div>
        <ul className="work__controls">
          <li onClick={this.left} className={`work__control ${index === 0? "work__control--disabled": ""}`}>
            <FontAwesomeIcon className="work__icon" icon="angle-left" />
            <span className="work__control-text">Prev</span>
          </li>
          <li onClick={this.right} className={`work__control ${index === MAX ? "work__control--disabled" : ""}`}>
            <span className="work__control-text">Next</span>
            <FontAwesomeIcon className="work__icon" icon="angle-right" />
          </li>
        </ul>
      </div>
      <section className="work__content">
        { data.map((item, key) => this.build(item, key)) }
      </section>
      <div className="work__wrapper--pdf">
        <a className="work__pdf" href={`${process.env.PUBLIC_URL}/resume.pdf`} aria-label="To PDF of Resume">Want a PDF? Click Here</a>
      </div>
    </Page>
  }

  build({ header, href, sideheader, subheader, body }, key) {
    return <div key={key} className="work__item">
      <h3 className="work__item-header">
        { header }
        {
          sideheader?
          <span className="work__item-sideheader"> / { sideheader }</span>:
          null
        }
      </h3>
      { subheader? <h4 className="work__item-subheader">{ subheader }</h4>: null }
      { body? this.buildBody(body): null }
      {
        href?
        <div className="work__wrapper--item-link">
          <span className="work__item-link-header">Link:</span>
          <a className="work__item-link" href={href}>{ href }</a>
        </div>: null
      }
    </div>
  }

  buildBody(body) {
    const type = typeof (body);
    if (type === "string") { return <p className="work__item-text">{body}</p> }
    else if (Array.isArray(body)) {
      return <ul className="work__item-list">
        {
          body.map((item, key1) =>
            <li className="work__item-list-item" key={key1}>{item}</li>
          )
        }
      </ul>
    }

    return body
  }
}