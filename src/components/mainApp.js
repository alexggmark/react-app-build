import React from 'react'
import Header from '../components/header'
import UserInput from './userInput'
import TodoList from './todoList'
import './mainApp.scss'

export default class MainApp extends React.Component {
  render () {
    return (
      <>
        <Header />
        <div className="main-app">
          <div className="main-app__container">
            <UserInput />
            <TodoList />
          </div>
        </div>
      </>
    )
  }
}
