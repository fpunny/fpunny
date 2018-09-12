import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleFade } from '../redux/actions/page';
import '../styles/containers/page.css';

class _Page extends Component {

  componentDidMount() {
    const { fade, toggleFade } = this.props;
    if (fade) { toggleFade(false) }
  }

  componentWillUnmount() {
    this.props.toggleFade();
  }

  render() {
    const { className, style, fade, children } = this.props;
    return <main style={style} className={`page ${className}${fade? ` ${className}--fade`: ""}`}>
      { children }
    </main>
  }
}

const mapStateToProps = state => ({
  fade: state.page.fade
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleFade
}, dispatch);

export const Page = connect(mapStateToProps, mapDispatchToProps)(_Page);