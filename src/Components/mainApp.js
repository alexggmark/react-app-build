import React from 'react'
import UserInput from './userInput'
import TodoList from './todoList'
import './mainApp.scss'

export default class MainApp extends React.Component {
  render () {
    return (
      <div className="main-app">
        <UserInput />
        <TodoList />
      </div>
    )
  }
}