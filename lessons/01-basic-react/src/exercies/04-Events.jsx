import { Component } from "react"

export class App extends Component {
  /*
  Use the buttons to control the position of the cube.
  (style: {transform: translate})
  */
  render () {
    return <div className="cube">
      <button className="cube-left">left</button>
      <button className="cube-up">up</button>
      <button className="cube-right">right</button>
      <button className="cube-down">down</button>
    </div>
  }
}
