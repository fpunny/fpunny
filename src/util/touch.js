import { store } from '..';
import { swipeUp, swipeRight, swipeDown, swipeLeft } from '../redux/actions/swipe';

// Global Settings
const MIN_VELOCITY = 0.8;

// X Settings
const MIN_DISTANCE_X = 80;
const MIN_OFFSET_X = 40;

// Y Settings
const MIN_DISTANCE_Y = 80;
const MIN_OFFSET_Y = 40;

export class Touch {

  isEmpty = true

  init = (el) => {
    const { identifier, screenX, screenY } = el.targetTouches[0];
    this.id = identifier;
    this.X = screenX;
    this.Y = screenY;
    this.time = el.timeStamp;
    this.isEmpty = false;
  }

  process = (el) => {
    const { identifier, screenX, screenY } = el.changedTouches[0];
    if (this.id === identifier) {
      const dx = screenX - this.X;
      const dy = screenY - this.Y;
      const dt = el.timeStamp - this.time;
      const v = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) / dt;

      if (v >= MIN_VELOCITY) {

        const absx = Math.abs(dx);
        const absy = Math.abs(dy);

        if (absx > MIN_DISTANCE_X && absy <= MIN_OFFSET_X) {
          if (dx > 0) { store.dispatch(swipeRight()) }
          else { store.dispatch(swipeLeft()) }

        } else if (absy > MIN_DISTANCE_Y && absx <= MIN_OFFSET_Y) {
          if (dy > 0) { store.dispatch(swipeDown()) }
          else { store.dispatch(swipeUp()) }
        }
      }

      this.isEmpty = true;
    }
  }
}