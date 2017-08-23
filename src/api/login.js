import Api from './Api'
import { nav as navActions, login as loginActions } from '../actions'

class Login extends Api {
  constructor() {
    super()
  }

  async sendCode(dispatch, phone) {
    dispatch(loginActions.submitPhone())
    setTimeout(() => {
      dispatch({ type: loginActions.SUBMIT_PHONE_SUCCESS })
    }, 1000)
  }

  async verifyCode(dispatch, code) {
    dispatch(loginActions.submitCode())
    setTimeout(() => {
      dispatch({ type: loginActions.SUBMIT_CODE_SUCCESS })
      dispatch(navActions.todosList())
    }, 1000)
  }
}

let login = new Login()

export { login }
