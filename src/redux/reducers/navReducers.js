import { TOGGLE_MOBILE, TOGGLE_NAV } from '../actions/nav';
import { SWIPE_UP, SWIPE_DOWN } from '../actions/swipe';

const NAV_DEFAULT = {
  show: false,
  scrolled: false
}

export const nav = (state = NAV_DEFAULT, action) => {
  const { type, content } = action;
  switch (type) {
    case TOGGLE_MOBILE:
      return { ...state, show: content || !state.show }
    case TOGGLE_NAV:
      return { ...state, scrolled: content || !state.scrolled }
    case SWIPE_UP:
      return { ...state, show: state.show && false }
    case SWIPE_DOWN:
      return { ...state, show: state.show || true }
    default:
      return state
  }
}