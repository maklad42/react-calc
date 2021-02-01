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
          <Button className="altkey" label="C" value="clr" />
          <Button className="numkey" label="7" value="7" />
          <Button className="numkey" label="4" value="4" />
          <Button className="numkey" label="1" value="1" />
          <Button className="numkey" label="0" value="0" />

          <Button className="altkey" label="+/-" value="neg" />
          <Button className="numkey" label="8" value="8" />
          <Button className="numkey" label="5" value="5" />
          <Button className="numkey" label="2" value="2" />
          <Button className="nokey" label="" value="null" />

          <Button className="altkey" label="%" value="per" />
          <Button className="numkey" label="9" value="9" />
          <Button className="numkey" label="6" value="6" />
          <Button className="numkey" label="3" value="3" />
          <Button className="altkey" label="." value="." />

          <Button className="opkey" label="/" value="/" />
          <Button className="opkey" label="x" value="*" />
          <Button className="opkey" label="-" value="-" />
          <Button className="opkey" label="+" value="+" />
          <Button className="eqlkey" label="=" value="eql" />
        </Keypad>
      </div>
    );
  }
}
