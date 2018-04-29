import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

import registerServiceWorker from "./registerServiceWorker"
import reducers from "./reducers"
import AppContainer from "./containers/AppContainer"
import "./index.css"

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
