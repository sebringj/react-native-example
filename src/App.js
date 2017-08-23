import React from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './navigators/AppNavigator'
import { store } from './store'
import eventEmitter from './utils/eventEmitter'

// standard react redux setup w/ react navigation
class App extends React.Component {
  store = store

  componentWillMount() {
    // workaround for static calls to dispatch
    eventEmitter.on('dispatch', (payload) => {
      store.dispatch(payload)
    })
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App
