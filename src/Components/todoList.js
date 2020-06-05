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

class TodoEdit extends React.Component {
  render () {
    return (
      <>
        <img
          alt="test"
          className="todo-list__edit-icon"
          onClick={() => this.props.onEdit()}
          src={process.env.PUBLIC_URL + '/trash.svg'}
        />
        <img
          alt="test"
          className="todo-list__edit-icon"
          onClick={() => this.props.onDelete()}
          src={process.env.PUBLIC_URL + '/edit.svg'}
        />
      </>
    )
  }
}

class TodoItem extends React.Component {
  render () {
    return (
      <li className="todo-list__todo">
        <div className="todo-list__edit">
          <TodoEdit
            onEdit={() => this.props.onEdit()}
            onDelete={() => this.props.onDelete()}
          />
        </div>
        <div className="todo-list__content">{this.props.todo.todo}</div>
        <div className="todo-list__info">{this.props.todo.time}</div>
      </li>
    )
  }
}

const BuildList = (props) => {
  const todoItems = fakeData.map((item, index) => {
    return (
      <TodoItem
        onEdit={() => props.onEdit()}
        onDelete={() => props.onDelete()}
        todo={item}
      />
    )
  })

  return <ul>{todoItems}</ul>
}

export default class TodoList extends React.Component {
  onEdit = () => {
    console.log('Edit clicked')
  }

  onDelete = () => {
    console.log('Delete clicked')
  }

  render () {
    return (
      <div className="todo-list">
        <BuildList
          onEdit={() => this.onEdit()}
          onDelete={() => this.onDelete()}
        />
      </div>
    )
  }
}