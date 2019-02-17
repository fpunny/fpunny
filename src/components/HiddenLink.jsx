import React, { useState, memo } from 'react';

export const HiddenLink = memo(({ className, children, href, alt }) => {
  const [shownHref, setHref] = useState('mailto:unscrapeable@fpunny.com');
  const reveal = () => setHref(href);
  return (
    <a
      className={ className }
      aria-label={ alt }
      onTouchStart={ reveal }
      onMouseOver={ reveal }
      onFocus={ reveal }
      href={ shownHref }
    >
      { children }
    </a>
  );
});