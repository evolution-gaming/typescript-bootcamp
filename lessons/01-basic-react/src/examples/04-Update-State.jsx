import { Component } from "react"

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foo: 1,
      data: { a: 10, b: 13 },
    }

    /*     setTimeout(() => {
      this.setState(state => ({
        data: {
          ...state.data,
          a: state.data.a + 10,
        },
      }))
      this.setState(state => ({
        data: {
          ...state.data,
          a: state.data.a + 15,
        },
      }))
    }, 1000) */
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({
        foo: state.foo + 1
        // data: {
        //   ...state.data,
        //   a: state.data.a + 15,
        // },
      }))
    }, 1000)
  }

  render() {
    console.log("render")
    return (
      <p>
        {this.state.foo}
        {/* {this.state.data.b} {this.state.data.a} */}
      </p>
    )
  }
}
