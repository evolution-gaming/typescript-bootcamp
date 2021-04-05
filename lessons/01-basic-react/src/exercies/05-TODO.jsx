import { Component } from "react"

class TodoApp extends Component {
  /* Implement todo app */
  state = {
    input: "",
    todos: [{
      done: false,
      text: "Buy milk"
    }]
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {

    }
  }


  render () {
    return <main>
      <ul></ul>
      <input value onChange onKeyPress />
    </main>
  }

  renderTodoItem = (item) => {
    return <li></li>
  }
}
