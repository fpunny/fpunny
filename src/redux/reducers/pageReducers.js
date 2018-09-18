import { TOGGLE_FADE, LOADED } from '../actions/page';

const PAGE_DEFAULT = {
  fade: false,
  loaded: {}
}

export const page = (state = PAGE_DEFAULT, action) => {
  const { type, content } = action;
  switch(type) {
    case TOGGLE_FADE:
      return { ...state, fade: content || !state.fade }
    case LOADED:
      state.loaded[content] = true;
      return state
    default:
      return state
  }
}