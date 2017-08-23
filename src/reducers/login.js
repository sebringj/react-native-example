const initialAuthState = { isLoggedIn: false }
import { login as loginActions } from '../actions'

function login(state = initialAuthState, action) {
  switch (action.type) {
    case loginActions.SUBMIT_PHONE:
      return { ...state, login: { loading: true } }
    case loginActions.SUBMIT_PHONE_SUCCESS:
      return { ...state, login: { loading: false, showCode: true } }
    case loginActions.SUBMIT_CODE:
      return { ...state, login: { loading: true } }
    case loginActions.SUBMIT_CODE_SUCCESS:
      return { ...state, login: undefined, isLoggedIn: true }
    default:
      return state
  }
}
export default login
