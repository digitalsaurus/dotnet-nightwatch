import * as React from 'react';

interface CounterState {
  count: number;
}

export default class Counter extends React.Component<{}, CounterState> {
  state = {
    count: 0
  };
  render() {
    return (
      <div className="counter">
        <span>{this.state.count}</span>
        <button onClick={e => this.setState({ count: this.state.count + 1 })}>Add</button>
      </div>
    );
  }
}