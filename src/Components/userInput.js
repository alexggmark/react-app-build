import React from 'react'
import './userInput.scss'

export default class UserInput extends React.Component {
  render () {
    return (
      <div className="user-input">
        <input className="user-input__input" />
        <button className="user-input__button">Button</button>
      </div>
    )
  }
}