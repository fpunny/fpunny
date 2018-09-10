import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TRANSITION_DELAY } from '..';
import { toggleFade } from '../redux/actions/page';

export class __Link extends PureComponent {
  render () {
    const { to, className, children } = this.props;
    return <Link to={to} className={className} onClick={this.click}>
      {children}
    </Link>
  }

  click = (e) => {
    e.preventDefault();
    const { history, toggleFade, isActive, to } = this.props;
    if (isActive === undefined || !isActive) {
      toggleFade();
      window.setTimeout(() => history.push(to), TRANSITION_DELAY);
    }
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleFade
},dispatch);

export const _Link = connect(null, mapDispatchToProps)(withRouter(__Link));