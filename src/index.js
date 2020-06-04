import React from 'react'
import ReactDOM from 'react-dom'
import DefaultLayout from './Layouts/default'
import Application from './Components/application'

class App extends React.Component {
  render () {
    return (
      <DefaultLayout>
        <Application />
      </DefaultLayout>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))