import { Component } from "react"

export class App extends Component {
  time = new Date().toUTCString()
/*
   constructor(props) {
    super(props)

    this.state = {
      time: new Date().toUTCString(),
    }
  }
*/
  componentDidMount() {

    this.intervalId = setInterval(() => {
      const newTime = new Date().toUTCString()

      this.time = newTime

      console.log("time has changed,", newTime)
    }, 1000)

  }

  componentWillUnmount( ) {
    clearInterval(this.intervalId)
  }

  render() {
    return <p>{this.time}</p>
  }
}
