const initialAuthState = { isLoggedIn: false }
import { nav as navActions } from '../actions'

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case navActions.LOGIN:
      return { ...state, isLoggedIn: false }
    case navActions.LOGOUT:
      return { ...state, isLoggedIn: false }
    default:
      return state
  }
}

export default auth
