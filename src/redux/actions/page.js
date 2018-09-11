export const TOGGLE_FADE = 'TOGGLE_FADE';
export const LOADED = 'LOADED';

export const toggleFade = (fade) => ({
  type: TOGGLE_FADE,
  content: fade
})

export const loaded = (path) => ({
  type: LOADED,
  content: path
})