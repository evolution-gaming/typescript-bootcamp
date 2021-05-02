import { Component } from 'react';

interface AppState {
  counter: number;
}

class BindInRender extends Component<{}, AppState> {
  state = {
    counter: 0,
  };

  onIncrease = () => {
    this.setState((s) => ({ counter: s.counter + 1 }));
  };

  onDecrease = () => {
    this.setState((state) => ({ ...state, counter: state.counter - 1 }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <p>{counter}</p>
        <button onClick={this.onIncrease}>Increase</button>
        <button onClick={this.onDecrease}>Decrease</button>
      </div>
    );
  }
}

export { BindInRender as App };
