import { TOGGLE_SHIFT } from '../actions/work';

const WORK_DEFAULT = {
  shift: false
}

export const work = (state = WORK_DEFAULT, action) => {
  const { type, content } = action;
  switch(type) {
    case TOGGLE_SHIFT:
      return { ...state, shift: content || !state.shift }
    default:
      return state
  }
}