import { TOGGLE_SHIFT, CHANGE_INDEX } from '../actions/work';
const WORK_DEFAULT = {
  shift: false,
  index: 0
}

export const work = (state = WORK_DEFAULT, action) => {
  const { type, content } = action;
  switch(type) {
    case CHANGE_INDEX:
      return { ...state, index: content }
    case TOGGLE_SHIFT:
      return { ...state, shift: content || !state.shift }
    default:
      return state
  }
}