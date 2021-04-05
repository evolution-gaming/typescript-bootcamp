import { Component } from "react"

class Child extends Component {
  componentDidMount() {
    console.log("mount")
  }
  render() {
    console.log("render")
    const { counter } = this.props
    return (
      <div>
        <p>Children counter: {counter}</p>
      </div>
    )
  }
}

class SmallI extends Component {
  render() {
    const { children } = this.props

    return (
      <i style={{ fontSize: 13 }}>{children}</i>
    )
  }
}

export class App extends Component {
  state = {
    counter: 0,
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(({ counter }) => ({
        counter: counter + 1,
      }))
    }, 1000)
  }

  // componentWillUnmount() {}

  render() {
    return (
      <main>
        <p>
          <b>Parent</b>
        </p>
          <Child counter={this.state.counter} />
      </main>
    )
  }
}
