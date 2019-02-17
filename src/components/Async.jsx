import React, { memo } from 'react';
import '../styles/components/async.scss';

export const Async = memo(() => (
  <main className="async">
    <div className="async__spinner">
      <div className="async__line">
        <div className="async__dot async__dot--one" />
        <div className="async__dot async__dot--two" />
      </div>
      <div className="async__line">
        <div className="async__dot async__dot--three" />
        <div className="async__dot async__dot--four" />
      </div>
    </div>
  </main>
));