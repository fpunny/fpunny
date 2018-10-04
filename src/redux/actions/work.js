export const TOGGLE_SHIFT = "TOGGLE_SHIFT";
export const CHANGE_INDEX = "CHANGE_INDEX";

export const toggleShift = content => ({
  type: TOGGLE_SHIFT,
  content
})

export const changeIndex = index => ({
  type: CHANGE_INDEX,
  content: index
})