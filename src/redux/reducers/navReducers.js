import { TOGGLE_MOBILE, TOGGLE_NAV } from '../actions/nav';

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
    default:
      return state
  }
}