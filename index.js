import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0,
    price: 5,
  };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    if (this.state.counter < 1) return 0;
    this.setState({ counter: this.state.counter - 1 });
  };

  calculate = () => {
    this.setState({ price: this.state.counter * this.state.price });
  };

  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        <p style={{ display: 'inline-block' }}>Price: {this.state.price}/kg</p>
        <br />
        &nbsp;{' '}
        <button style={{ display: 'inline-block' }} onClick={this.decrement}>
          -
        </button>
        &nbsp; <p style={{ display: 'inline-block' }}>{this.state.counter}</p>
        &nbsp; <button onClick={this.increment}>+</button>
        <br />
        &nbsp; <button onClick={this.calculate}>Calculated: {this.state.price}</button>
      </div>
    );
  }
}

const el = <Counter />;
const root = document.getElementById('root');

ReactDOM.render(el, root);
