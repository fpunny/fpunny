export const TOGGLE_MOBILE = "TOGGLE_MOBILE";
export const TOGGLE_NAV = "TOGGLE_NAV";

export const toggleMobile = content => ({
  type: TOGGLE_MOBILE,
  content
})

export const toggleNav = content => ({
  type: TOGGLE_NAV,
  content
})