export const MAIN = 'NAV_MAIN'
export const LOGIN = 'NAV_LOGIN'
export const LOGOUT = 'NAV_LOGOUT'
export const TODOS_LIST = 'NAV_TODOS_LIST'
export const TODOS = 'NAV_TODOS'

import eventEmitter from '../utils/eventEmitter'

export function main() {
  eventEmitter.emit('dispatch',{ type: MAIN })
}

export function login() {
  eventEmitter.emit('dispatch',{ type: LOGIN })
}

export function logout() {
  eventEmitter.emit('dispatch',{ type: LOGOUT })
}

export function todosList() {
  eventEmitter.emit('dispatch',{ type: TODOS_LIST })
}

export function todos(id) {
  eventEmitter.emit('dispatch',{ type: TODOS, id })
}
