import React, { memo, useEffect, useState } from 'react';
import '../styles/containers/page.scss';

export const Page = memo(({ block, className, style, children }) => {
  const [ fade, setFade ] = useState(false);
  const handleFade = () => setFade(!fade);
  useEffect(() => {
    if (window.scrollY !== 0) { window.scrollTo(0, 0) }
    window.addEventListener('onPageFade', handleFade);
    return () => {
      window.dispatchEvent(new CustomEvent('onPageFade'));
      window.removeEventListener('onPageFade', handleFade);
    };
  }, [fade]);

  const name = `page ${block}${fade ? ` ${block}--fade` : ""}${className ? ` ${className}` : ""}`;
  return (
    <div style={ style } className={ name }>{ children }</div>
  );
});