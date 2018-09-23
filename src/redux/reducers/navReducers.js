import { TOGGLE_MOBILE } from '../actions/nav';

const NAV_DEFAULT = {
  show: false
}

export const nav = (state = NAV_DEFAULT, action) => {
  const { type, content } = action;
  switch (type) {
    case TOGGLE_MOBILE:
      return { ...state, show: content || !state.show }
    default:
      return state
  }
}