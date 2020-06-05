import React from 'react'
import ReactDOM from 'react-dom'
import DefaultLayout from './layouts/default'
import MainApp from './components/mainApp'
import UserLogin from './components/userLogin'
import './index.scss'

class App extends React.Component {
  render () {
    return (
      <DefaultLayout>
        <MainApp />
        <UserLogin />
      </DefaultLayout>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))