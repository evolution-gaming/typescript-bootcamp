import { Component } from "react"



export class App extends Component {
  userList = ["Artem", "Anton", "Boris"]

  render() {
    return (
      <ul>
        {this.userList.map(( user ) => (
          <li key={Math.random()}>{user}</li>
        ))}
      </ul>
    )
  }
}
