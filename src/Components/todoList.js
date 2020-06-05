import React from 'react'
import './todoList.scss'
import { connect } from 'react-redux'
import {
  TODO_DELETE
} from '../constants/actions'

class TodoList extends React.Component {
  onEdit = () => {
    // this.props.dispatch({ type: TODO_EDIT})
  }

  onDelete = (index) => {
    this.props.dispatch({
      type: TODO_DELETE,
      payload: index
    })
  }

  render () {
    return (
      <div className="todo-list">
        {this.props.items.map((item, index) => (
          <li
            className="todo-list__todo"
            key={index}
          >
            <div className="todo-list__edit">
              <img
                alt="test"
                className="todo-list__edit-icon"
                onClick={() => this.onDelete(index)}
                src={process.env.PUBLIC_URL + '/trash.svg'}
              />
              <img
                alt="test"
                className="todo-list__edit-icon"
                onClick={this.onEdit}
                src={process.env.PUBLIC_URL + '/edit.svg'}
              />
            </div>
            <div className="todo-list__content">{item.content}</div>
            <div className="todo-list__info">{item.date}</div>
          </li>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(TodoList)