import React, { Component } from 'react';
import '../styles/containers/page.scss';

export class Page extends Component {

  state = { fade: false }
  handleFade = async () => this.setState(({ fade }) => ({ fade: !fade }))

  componentDidMount() {
    // Reset scroll on page transition
    const Y = window.scrollY;
    if (Y !== 0) { window.scrollTo(0, 0) }
    window.addEventListener('onPageFade', this.handleFade);
  }

  componentWillUnmount() {
    window.dispatchEvent(new CustomEvent('onPageFade'));
    window.removeEventListener('onPageFade', this.handleFade);
  }

  render() {
    const { fade } = this.state;
    const { block, className, style, children } = this.props;
    const name = `page ${block}${fade ? ` ${block}--fade` : ""}${className ? ` ${className}` : ""}`;
    return <main style={style} className={name}>
      { children }
    </main>
  }
}