import React from 'react'
import './todoList.scss'

const fakeData = [
  {
    todo: 'Pick up crystal methamphetamine and 2pts. milk',
    completed: false,
    time: '13:54'
  },
  {
    todo: 'Pick up crystal methamphetamine and 2pts. milk',
    completed: false,
    time: '12:24'
  }
]

class TodoItem extends React.Component {
  render () {
    return (
      <li className="todo-list__todo">
        <div class="todo-list__edit">Edit</div>
        <div class="todo-list__content">{this.props.todo.todo}</div>
        <div class="todo-list__info">{this.props.todo.time}</div>
      </li>
    )
  }
}

const BuildList = () => {
  const todoItems = fakeData.map((item, index) => {
    return (
      <TodoItem todo={item} />
    )
  })

  return <ul>{todoItems}</ul>
}

export default class TodoList extends React.Component {
  render () {
    return (
      <div className="todo-list">
        <BuildList />
      </div>
    )
  }
}