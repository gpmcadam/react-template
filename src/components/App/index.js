import React, { Component } from "react"
import PropTypes from "prop-types"

import "./App.css"

class App extends Component {
  static propTypes = {
    user: PropTypes.string,
    onChooseUser: PropTypes.func
  }
  static defaultProps = {
    user: null,
    onChooseUser: () => {}
  }
  render() {
    const { onChooseUser, user } = this.props
    const users = ["Alice", "Bob", "Charles"]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Choose a User</h1>
        </header>
        <p className="App-intro">
          {users.map((u, i) => {
            return (
              <button key={i} onClick={() => onChooseUser(u)}>
                {u}
              </button>
            )
          })}
        </p>
        {user ? <p>Selected: {user}</p> : null}
      </div>
    )
  }
}

export default App
