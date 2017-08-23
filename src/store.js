import AppReducer from './reducers'
import { createStore } from 'redux'
export const store = createStore(AppReducer)
