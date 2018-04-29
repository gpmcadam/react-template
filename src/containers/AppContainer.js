import React, { Component } from "react"
import { connect } from "react-redux"
import { userSet } from "../actions/user"

import App from "../components/App"

class AppContainer extends Component {
  render() {
    return <App user={this.props.user} onChooseUser={this.props.userSet} />
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userSet: user => dispatch(userSet(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
