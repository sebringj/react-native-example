import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../navigators/AppNavigator'
import { nav as navActions } from '../actions'

// Start with two routes: The Splash screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main')
const tempNavState = AppNavigator.router.getStateForAction(firstAction)
const secondAction = AppNavigator.router.getActionForPathAndParams('Login')
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
)

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case navActions.MAIN:
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main' })
        ]
      })
      nextState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'))
      break
    case navActions.TODOS_LIST:
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'TodosList' })
        ]
      })
      nextState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('TodosList'))
      break
    case navActions.TODOS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Todos', id: action.id }),
        state
      )
      break
    case navActions.LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      )
      break
    case navActions.LOGOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      )
      break
    case navActions.LOGOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      )
      break
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

export default nav
