import React, { PureComponent } from 'react';

export class HiddenLink extends PureComponent {


  reveal = (el) => {
    const { href } = this.props;
    el.currentTarget.href = href;
  }

  render() {
    const { className, children, alt } = this.props;
    return <a
      className={className}
      aria-label={alt}
      onTouchStart={this.reveal}
      onMouseOver={this.reveal}
      onFocus={this.reveal}
      href="mailto:unscrapeable@fpunny.com"
    >
      {children}
    </a>
  }
}