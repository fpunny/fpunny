import React, { PureComponent } from 'react';

export class Swipe extends PureComponent {

  ref = new React.createRef();

  initTouch = (el) => {
    const { identifier, screenX, screenY } = el.targetTouches[0];
    this.time = el.timeStamp;
    this.touch = identifier;
    this.X = screenX;
    this.Y = screenY;
  }

  onTouchStart = (el) => {
    console.log("START_TOUCH");
    if (!this.touch) {
      console.log("REGISTERING_TOUCH");
      this.initTouch(el);
    }
  }

  onTouchEnd = (el) => {
    console.log("END_TOUCH");
    const { identifier, screenX, screenY } = el.changedTouches[0];
    if (identifier === this.touch) {
      console.log("PROCESSING_TOUCH");
      const time = el.timeStamp;
      const X = screenX;
      const Y = screenY;

      console.log(
        time - this.time,
        X - this.X,
        Y - this.Y
      );
      this.touch = null;
    }
  }

  componentDidMount() {
    this.ref.addEventListener("touchstart", this.onTouchStart, { passive: true });
    this.ref.addEventListener("touchend", this.onTouchEnd, { passive: true });
  }

  componentWillUnmount() {
    this.ref.removeEventListender("touchstart", this.onTouchStart);
    this.ref.removeEventListender("touchend", this.onTouchEnd);
  }

  render() {
    const { children } = this.props;
    return <div ref={ el => this.ref = el }>
      { children }
    </div>
  }
}