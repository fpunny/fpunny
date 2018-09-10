import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TRANSITION_DELAY } from '..';
import { toggleFade } from '../redux/actions/page';

const root = window.location.origin;
export class __Link extends PureComponent {
  render () {
    const { to, className, children } = this.props;
    return <Link to={to} className={className} onClick={this.click}>
      {children}
    </Link>
  }

  click = (e) => {
    e.preventDefault();
    const { history, toggleFade, isActive } = this.props;
    if (isActive === undefined || !isActive) {
      const path = e.currentTarget.href.replace(root, "");
      toggleFade();
      window.setTimeout(() => history.push(path), TRANSITION_DELAY);
    }
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleFade
},dispatch);

export const _Link = connect(null, mapDispatchToProps)(withRouter(__Link));