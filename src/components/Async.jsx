import React, { PureComponent } from 'react';
import { loaded } from '../redux/actions/page';
import '../styles/components/async.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPath } from '../containers';

const MIN_LOAD_TIME = 500;
class _Async extends PureComponent {
  
  state = {
    Component: null
  }

  load = (data, curr) => {
    const { isloaded, loaded } = this.props;
    const delay = MIN_LOAD_TIME - (new Date() - curr);
    const path = getPath();

    if (isloaded[path] || delay <= 0) { this.setState({ Component: data.default }) }
    else {
      window.setTimeout(() => {
        loaded(path);
        this.setState({ Component: data.default });
      }, delay);
    }
  }

  componentDidMount() {
    const { loader } = this.props;
    if (!this.state.Component && loader) {
      const curr = new Date();
      loader().then(data =>
        this._isUnmounted ? null : this.load(data, curr)
      )
    }
  }

  componentWillUnmount() {
    this._isUnmounted = true;
  }

  render() {
    const { Component } = this.state;
    return Component?
      <Component/>:
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
    ;
  }
}

const mapStateToProps = state => ({
  isloaded: state.page.loaded
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loaded
}, dispatch);

export const Async = connect(mapStateToProps, mapDispatchToProps)(_Async);