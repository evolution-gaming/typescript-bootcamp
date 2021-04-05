import { Component } from "react"

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  render() {
    console.log("render")
    return <p>Hello, Class!</p>
  }
}

const FunctionComponent = () => (
  <p>Hello, Function!</p>
)

export class App extends Component {
  render() {
    return (
      <main>
        <ClassComponent />
        <FunctionComponent />
      </main>
    )
  }
}
