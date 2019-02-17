import React from 'react';
import { Link as RLink, withRouter } from 'react-router-dom';
import { TRANSITION_DELAY } from '../values';

const _click = (e, history, isActive, to) => {
  e.preventDefault();
  if (isActive === undefined || !isActive) {
    window.dispatchEvent(new CustomEvent('onPageFade'));
    window.setTimeout(() => history.push(to), TRANSITION_DELAY);
  }
}

const _Link = ({ to, className, children, alt, history, isActive }) => {
  const click = el => _click(el, history, isActive, to);
  return (
    <RLink to={ to } aria-label={ alt } className={ className } onClick={ click }>
      { children }
    </RLink>
  );
}

export const Link = withRouter(_Link);