import { Component } from "react"

class ListItem extends Component {
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
    return <li>{this.props.children}</li>
  }
}

export class App extends Component {
  state = {
    v: 1,
  }
  componentDidMount() {
    setInterval(
      () =>
        this.setState(({ v }) => ({ v: v + 1 })),
      2000,
    )
  }
  render() {
    return (
      <ul>
        {[1].map(item => (
          <ListItem>{item}</ListItem>
        ))}
      </ul>
    )
  }
}
