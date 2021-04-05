import { Component } from "react"

export class App extends Component {
  state = {
    counter: 0,
  }

  handleClick = (e) => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }))
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <main>
        <p>counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>
          increase
        </button>
      </main>
    )
  }
}
