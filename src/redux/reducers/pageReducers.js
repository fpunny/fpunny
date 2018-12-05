import { TOGGLE_FADE } from '../actions/page';

const PAGE_DEFAULT = {
  fade: false
}

export const page = (state = PAGE_DEFAULT, action) => {
  const { type, content } = action;
  switch(type) {
    case TOGGLE_FADE:
      return { ...state, fade: content || !state.fade }
    default:
      return state
  }
}