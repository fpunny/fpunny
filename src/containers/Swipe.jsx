import { memo, useEffect, useState } from 'react';
import { Touch } from '../util';

export const Swipe = memo(({ children }) => {

  const [ touch ] = useState(new Touch());
  const onTouchEnd = async el => touch.process(el);
  const onTouchStart = async el => touch.isEmpty ? await touch.init(el) : null;

  useEffect(() => {
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    }
  });

  return children;
});