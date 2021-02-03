import React, { Component } from 'react';
import './Display.scss';

export default class Display extends Component {
  render() {
    return <div className="Display">{this.props.data}</div>;
  }
}
