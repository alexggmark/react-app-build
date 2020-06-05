import React from 'react'
import Header from '../components/header'
import './default.scss'

export default class Default extends React.Component {
  render () {
    return (
      <div className="default-layout">
        <Header />
        {this.props.children}
      </div>
    )
  }
}