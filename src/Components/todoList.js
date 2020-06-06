import React from 'react'
import Moment from 'react-moment'
import './todoList.scss'
import { connect } from 'react-redux'
import {
  TODO_DELETE,
  TODO_EDITING,
  TODO_EDIT
} from '../constants/actions'

const EditingBay = (props) => {
  const inputSubmitRef = React.createRef()

  if (props.itemData.editing) {
    return (
      <div className="todo-list__editing-bay">
        <input
          className="todo-list__editing-input"
          placeholder={props.itemData.content}
          ref={inputSubmitRef}
        />
        <button
          className="todo-list__button"
          onClick={() => props.onEditSubmit(inputSubmitRef.current.value)}
        >
          Update
        </button>
      </div>
    )
  }
  return ''
}

class TodoList extends React.Component {
  onEdit = (index) => {
    this.props.dispatch({
      type: TODO_EDITING,
      payload: index
    })
  }

  onDelete = (index) => {
    this.props.dispatch({
      type: TODO_DELETE,
      payload: index
    })
  }

  onEditSubmit = (index, currentInput) => {
    this.props.dispatch({
      type: TODO_EDIT,
      payload: currentInput,
      payloadIndex: index
    })
  }

  render () {
    return (
      <div className="todo-list">
        {this.props.items.map((item, index) => (
          <li
            key={index}
          >
            <div className="todo-list__todo">
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
                  onClick={() => this.onEdit(index)}
                  src={process.env.PUBLIC_URL + '/edit.svg'}
                />
              </div>
              <div className="todo-list__content">{item.content}</div>
              <div className="todo-list__info">
                <Moment format="HH:mm">
                  {item.date}
                </Moment>
              </div>
            </div>
            <EditingBay
              itemData={item}
              onEditSubmit={(currentInput) => this.onEditSubmit(index, currentInput)}
            />
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