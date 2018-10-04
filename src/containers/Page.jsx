import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleFade } from '../redux/actions/page';
import '../styles/containers/page.scss';

class _Page extends Component {

  ref = new React.createRef();

  componentDidMount() {
    // Fade toggle from page transition
    const { fade, toggleFade } = this.props;
    if (fade) { toggleFade(false) }

    // Reset scroll on page transition
    const Y = window.scrollY;
    if (Y !== 0) { window.scrollTo(0, 0) }
  }

  componentWillUnmount() {
    this.props.toggleFade();
  }

  render() {
    const { block, className, style, fade, children } = this.props;
    const name = `page ${block}${fade ? ` ${block}--fade` : ""}${className ? ` ${className}` : ""}`;
    return <main style={style} className={name}>
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