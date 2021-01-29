import React, { Component } from 'react';
import Button from './components/Button';
import Keypad from './components/Keypad';
import Display from './components/Display';
import './Calculator.css';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = { data: '' };
  }

  calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(this.state.data);
      this.setState({ data: res });
    } catch (e) {
      this.setState({ data: 'error' });
    }
  };

  handleClick = (e) => {
    const value = e.target.getAttribute('data-value');
    switch (value) {
      case 'clr':
        this.setState({ data: '' });
        break;
      case 'eql':
        this.calculate();
        break;
      default:
        this.setState({ data: this.state.data + value });
    }
  };

  render() {
    return (
      <div className="Calculator">
        <Display data={this.state.data} />
        <Keypad>
          <Button label="C" value="clr" />
          <Button label="7" value="7" />
          <Button label="4" value="4" />
          <Button label="1" value="1" />
          <Button label="0" value="0" />

          <Button label="/" value="/" />
          <Button label="8" value="8" />
          <Button label="5" value="5" />
          <Button label="2" value="2" />
          <Button label="." value="." />

          <Button label="x" value="*" />
          <Button label="9" value="9" />
          <Button label="6" value="6" />
          <Button label="3" value="3" />
          <Button label="" value="null" />

          <Button label="-" value="-" />
          <Button label="+" size="2" value="+" />
          <Button label="=" size="2" value="eql" />
        </Keypad>
      </div>
    );
  }
}
