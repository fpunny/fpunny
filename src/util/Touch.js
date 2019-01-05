const dispatch = async event => dispatchEvent(new CustomEvent(event));

// EVENTS
const EVENTS = {
  UP: 'onSwipeUp',
  RIGHT: 'onSwipeRight',
  DOWN: 'onSwipeDown',
  LEFT: 'onSwipeLeft',
  TAPTAP: 'onDoubleTap'
}

// Global Settings
const MIN_VELOCITY = 0.8;

// Tap Settings
const TAP_OFFSET = 10;
const TAP_PAUSE = 400;
const TAP_DURATION = 200;

// X Settings
const MIN_DISTANCE_X = 80;
const MIN_OFFSET_X = 40;

// Y Settings
const MIN_DISTANCE_Y = 80;
const MIN_OFFSET_Y = 40;

export class Touch {

  isEmpty = true

  init = async el => {
    const { identifier, screenX, screenY } = el.targetTouches[0];
    this.id = identifier;
    this.X = screenX;
    this.Y = screenY;
    this.time = el.timeStamp;
    this.isEmpty = false;
  }

  process = async el => {
    const { identifier, screenX, screenY } = el.changedTouches[0];
    if (this.id === identifier) {
      const dx = screenX - this.X;
      const dy = screenY - this.Y;
      const dt = el.timeStamp - this.time;
      const v = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) / dt;

      if (dx <= TAP_OFFSET && dy <= TAP_OFFSET && dt <= TAP_DURATION) {
        this.processTap(identifier, el.timeStamp);
      } else if (v >= MIN_VELOCITY) {
        await this.processSwipe(dx, dy);
        this.tap = null;
      }

      this.isEmpty = true;
    }
  }

  processTap = async (id, time) => {
    const diff = time - this.taptime;
    if (this.tap === id && diff <= TAP_PAUSE) {
      await dispatch(EVENTS.TAPTAP);
      this.tap = null;
    } else {
      this.tap = id;
      this.taptime = time;
    }
  }

  processSwipe = async (dx, dy) => {
    const absx = Math.abs(dx);
    const absy = Math.abs(dy);

    if (absx > MIN_DISTANCE_X && absy <= MIN_OFFSET_X) {
      if (dx > 0) { await dispatch(EVENTS.RIGHT) }
      else { await dispatch(EVENTS.LEFT) }

    } else if (absy > MIN_DISTANCE_Y && absx <= MIN_OFFSET_Y) {
      if (dy > 0) { await dispatch(EVENTS.DOWN) }
      else { await dispatch(EVENTS.UP) }
    }
  }
}