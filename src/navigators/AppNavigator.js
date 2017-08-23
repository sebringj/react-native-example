import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import Main from '../components/screens/Main'
import LoginScreen from '../components/screens/Login'
import TodosList from '../components/screens/TodosList'
import Todos from '../components/screens/Todos'

export const AppNavigator = StackNavigator({
  Main: { screen: Main },
  Login: { screen: LoginScreen },
  TodosList: { screen: TodosList },
  Todos: { screen: Todos },
})

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState);
