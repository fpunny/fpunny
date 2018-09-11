import React, { Component } from 'react';
import { loaded } from '../redux/actions/page';
import '../styles/components/async.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPath } from '../containers';

class _Async extends Component {
  
  state = {
    Component: null
  }

  load = () => {
    const { loader } = this.props;
    if (!this.state.Component && loader) {
      loader().then(data =>
        this._isUnmounted ? null : this.setState({ Component: data.default })
      )
    }
  }

  componentDidMount() {
    const { isloaded, loaded } = this.props;
    const path = getPath();

    if (isloaded[path]) {
      this.load();
    } else {
      window.setTimeout(() => { this.load(); loaded(path); }, 1500);
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