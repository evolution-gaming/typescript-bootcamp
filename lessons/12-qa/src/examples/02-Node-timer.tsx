import { Component } from "react"

class NodeTimer extends Component {
  timerId: number | undefined

  state = {
    timer: 0,
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ timer: this.state.timer + 1 })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return <p>timer: {this.state.timer}</p>
  }
}

export { NodeTimer as App }
