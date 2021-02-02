import React, { Component } from 'react';
import Button from './components/Button';
import Keypad from './components/Keypad';
import Display from './components/Display';
import './Calculator.css';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = { data: '', first: null, second: null, op: '' };
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
    const value = e.target.getAttribute('value');
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
          <Button label="C" value="clr" cl="Button altkey" />
          <Button label="7" value="7" cl="Button numkey" />
          <Button label="4" value="4" cl="Button numkey" />
          <Button label="1" value="1" cl="Button numkey" />
          <Button label="" value="null" cl="Button nokey" />

          <Button label="+/-" value="neg" cl="Button altkey" />
          <Button label="8" value="8" cl="Button numkey" />
          <Button label="5" value="5" cl="Button numkey" />
          <Button label="2" value="2" cl="Button numkey" />
          <Button label="0" value="0" cl="Button numkey" />

          <Button label="%" value="per" cl="Button altkey" />
          <Button label="9" value="9" cl="Button numkey" />
          <Button label="6" value="6" cl="Button numkey" />
          <Button label="3" value="3" cl="Button numkey" />
          <Button label="." value="." cl="Button altkey" />

          <Button label="/" value="/" cl="Button opkey" />
          <Button label="x" value="*" cl="Button opkey" />
          <Button label="-" value="-" cl="Button opkey" />
          <Button label="+" value="+" cl="Button opkey" />
          <Button label="=" value="eql" cl="Button eqlkey" />
        </Keypad>
      </div>
    );
  }
}
