import { Component } from "react"

class RandomRender extends Component {
  render() {
    /*Write a component that, depending on the props, displays the child */
    return null
  }
}

export class App extends Component {
  render() {
    return (
      <main>
        <h1>Random render</h1>
        <RandomRender>I'm here!</RandomRender>
      </main>
    )
  }
}
