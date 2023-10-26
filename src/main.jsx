import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

const defaultState = {
  cash: 0,
}
// action = {type: "", payload: ""}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload }
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}

const store = createStore(reducer) // объект содержащий несколько методов

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
