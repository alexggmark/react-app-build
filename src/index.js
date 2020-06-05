import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  TODO_ADD,
  TODO_DELETE
} from './constants/actions'

import MainApp from './components/mainApp'
import UserLogin from './components/userLogin'
import './index.scss'

const initialState = {
  items: [
    {
      id: 0,
      content: 'Pick up crystal methamphetamine and 2pts. milk',
      date: 1591396521809
    },
    {
      id: 1,
      content: 'Testing content',
      date: 1591396521809
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        items: [...state.items, {
          id: state.length + 1,
          content: action.payload,
          date: Date.now()
        }]
      }
    case TODO_DELETE:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload)
      }
    default:
      return state
  }
}

class App extends React.Component {
  render () {
    return (
      <div className="default-layout">
        <MainApp />
        <UserLogin />
      </div>
    )
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))