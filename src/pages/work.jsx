import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleShift } from '../redux/actions/work';
import { Page } from '../containers';
import { WORK, TRANSITION_DELAY } from '../values';
import '../styles/pages/work.css';

const MAX = WORK.length - 1;

class Work extends Component { 

  state = { index: 0 }
  shift = next => {
    this.props.toggleShift();
    window.setTimeout(
      () => {
        this.setState(({ index }) => ({ index: next ? ++index : --index }));
        this.props.toggleShift();
      }, TRANSITION_DELAY
    )
  }

  render() {
    const { index } = this.state;
    const { shift } = this.props;
    const { title, data } = WORK[index];
    return <Page block="work" className={shift? "work--shift": null}>
      <div className="work__head">
        <h1 className="work__header">Resume</h1>
        <h2 className="work__topic">{ title }</h2>
        <ul className="work__controls">
          <li onClick={index === 0 || shift ? null : this.shift.bind(this, false)} className={`work__control ${index === 0? "work__control--disabled": ""}`}>
            <i className="work__icon fa fa-angle-left"/>
          </li>
          <li onClick={index === MAX || shift ? null : this.shift.bind(this, true)} className={`work__control ${index === MAX ? "work__control--disabled" : ""}`}>
            <i className="work__icon fa fa-angle-right" />
          </li>
        </ul>
      </div>
      <div className="work__wrapper--content">
        <section className="work__content">
          { data.map((item, key) => this.build(item, key)) }
        </section>
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
        </div>: null }
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

const mapStateToProps = state => ({
  shift: state.work.shift
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleShift
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Work);