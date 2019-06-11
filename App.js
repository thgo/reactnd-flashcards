import React, { Component } from 'react'
import Navigator from './src/navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/store/reducers'
import middleware from './src/store/middleware'
import './src/config/StatusBarConfig'
import { setLocalNotification } from './utils/notification'

class App extends Component {

  async componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <Navigator />
      </Provider>
    )
  }
}

export default App