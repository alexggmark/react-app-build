import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'

export default class DefaultLayout extends React.Component {
  render () {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    )
  }
}