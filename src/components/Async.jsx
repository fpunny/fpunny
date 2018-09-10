import React, { PureComponent } from 'react';
import '../styles/components/async.css';

export class Async extends PureComponent {
  
  state = {
    Component: null
  }

  componentDidMount() {
    if (!this.state.Component) {
      this.props.loader().then(data =>
        this._isUnmounted? null: this.setState({ Component: data.default })
      )
    }
  }

  componentWillUnmount() {
    this._isUnmounted = true;
  }

  render() {
    const { Component } = this.state;
    return Component? <Component/>: <h1>Loading</h1>;
  }
}