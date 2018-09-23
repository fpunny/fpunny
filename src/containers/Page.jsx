import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleFade } from '../redux/actions/page';
import '../styles/containers/page.css';

class _Page extends Component {

  componentDidMount() {
    const { fade, toggleFade } = this.props;
    const Y = window.scrollY;
    if (Y !== 0) { window.scrollTo(0, 0) }
    if (fade) { toggleFade(false) }
  }

  componentWillUnmount() {
    this.props.toggleFade();
  }

  render() {
    const { block, className, style, fade, children } = this.props;
    return <main style={style} className={`page ${block}${fade? ` ${block}--fade`: ""}${className? ` ${className}`: ""}`}>
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