import React from 'react'

const ValidateCounter = (props) => {
  return  <p>{props.counter < 3 ? props.counter : 'too much'}</p>
}

export default class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render () {
    return (
      <div className="content">
        <button onClick={this.increment}>Increment</button>
        <span><ValidateCounter counter={this.state.counter} /></span>
      </div>
    )
  }
}