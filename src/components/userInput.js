import React from 'react'
import { connect } from 'react-redux'
import {
  TODO_ADD
} from '../constants/actions'
import './userInput.scss'

class UserInput extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  handleSubmit = () => {
    if (this.inputRef.current.value === '') { return }
    this.props.dispatch({
      type: TODO_ADD,
      payload: this.inputRef.current.value
    })
  }

  render () {
    return (
      <div className="user-input">
        <input
          className="user-input__input"
          placeholder="Enter your task here"
          maxLength="80"
          ref={this.inputRef}
        />
        <button
          className="user-input__button"
          onClick={this.handleSubmit}
        >
          Add Todo
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(UserInput)