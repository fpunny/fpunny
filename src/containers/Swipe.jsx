import { PureComponent } from 'react';
import { Touch } from '../util';

export class Swipe extends PureComponent {
  
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
    window.addEventListener("touchstart", this.onTouchStart, { passive: true });
    window.addEventListener("touchend", this.onTouchEnd, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("touchstart", this.onTouchStart);
    window.removeEventListener("touchend", this.onTouchEnd);
  }

  render() { return this.props.children }
}