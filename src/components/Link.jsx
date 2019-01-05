import React, { PureComponent } from 'react';
import { Link as RLink, withRouter } from 'react-router-dom';
import { TRANSITION_DELAY } from '../values';

class _Link extends PureComponent {

  render () {
    const { to, className, children, alt } = this.props;
    return <RLink to={ to } aria-label={ alt } className={ className } onClick={ this.click }>
      { children }
    </RLink>
  }

  click = e => {
    e.preventDefault();
    const { history, isActive, to } = this.props;
    if (isActive === undefined || !isActive) {
      window.dispatchEvent(new CustomEvent('onPageFade'));
      window.setTimeout(() => history.push(to), TRANSITION_DELAY);
    }
  }
}

export const Link = withRouter(_Link);