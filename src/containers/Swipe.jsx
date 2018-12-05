import React, { PureComponent } from 'react';
import { Touch } from '../util';

export class Swipe extends PureComponent {

  ref = new React.createRef();
  touch = new Touch();

  onTouchStart = async el => {
    if (this.touch.isEmpty) {
      await this.touch.init(el);
    }
  }

  onTouchEnd = async el => {
    await this.touch.process(el);
  }

  componentDidMount() {
    if (this.ref) {
      this.ref.addEventListener("touchstart", this.onTouchStart, { passive: true });
      this.ref.addEventListener("touchend", this.onTouchEnd, { passive: true });
    }
  }

  componentWillUnmount() {
    if (this.ref) {
      this.ref.removeEventListener("touchstart", this.onTouchStart);
      this.ref.removeEventListener("touchend", this.onTouchEnd);
    }
  }

  render() {
    const { children } = this.props;
    return <div ref={el => this.ref = el}>
      { children }
    </div>
  }
}