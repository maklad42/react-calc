import React, { Component } from 'react';
import './Keypad.css';

export default class Keypad extends Component {
  render() {
    return <div className="Keypad">{this.props.children}</div>;
  }
}
