import { combineReducers } from 'redux'
import nav from './nav'
import auth from './auth'
import login from './login'
import todos from './todos'

const AppReducer = combineReducers({
  nav,
  auth,
  login,
  todos
})

export default AppReducer
