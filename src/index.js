import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT,
  TODO_EDITING
} from './constants/actions'

import MainApp from './components/mainApp'
import UserLogin from './components/userLogin'
import './index.scss'

const initialState = {
  items: [
    {
      id: 0,
      content: 'Pick up crystal methamphetamine and 2pts. milk',
      editing: false,
      date: 1591396521809
    },
    {
      id: 1,
      content: 'Testing content',
      editing: false,
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
          date: Date.now(),
          editing: false
        }]
      }
    case TODO_DELETE:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload)
      }
    case TODO_EDITING:
      return {
        ...state,
        items: state.items.map((item, index) => index === action.payload ? {
          ...item,
          editing: !item.editing
        } : item)
      }
    case TODO_EDIT:
      return {
        ...state,
        items: state.items.map((item, index) => index === action.payloadIndex ? {
          ...item,
          content: action.payload
        } : item)
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