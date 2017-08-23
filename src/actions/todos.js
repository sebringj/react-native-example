export const ADD_TODO = 'TODOS_ADD_TODO'
export const DELETE_TODO = 'TODOS_DELETE_TODO'
export const ADD_TODOS_LIST = 'TODOS_ADD_TODOS_LIST'
export const DELETE_TODOS_LIST = 'TODOS_DELETE_TODOS_LIST'
export const TOGGLE_TODO = 'TODOS_TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'TODOS_SET_VISIBILITY_FILTER'

import eventEmitter from '../utils/eventEmitter'

export const VisibilityFilters = {
  SHOW_ALL: 'TODOS_SHOW_ALL',
  SHOW_COMPLETED: 'TODOS_SHOW_COMPLETED',
  SHOW_ACTIVE: 'TODOS_SHOW_ACTIVE'
}

export function addTodosList(name) {
  eventEmitter.emit('dispatch',{ type: ADD_TODOS_LIST, name })
}

export function deleteTodosList(name) {
  eventEmitter.emit('dispatch',{ type: DELETE_TODOS_LIST, text })
}

export function addTodo(text) {
  eventEmitter.emit('dispatch',{ type: ADD_TODO, text })
}

export function toggleTodo(index) {
  eventEmitter.emit('dispatch',{ type: TOGGLE_TODO, index })
}

export function setVisibilityFilter(filter) {
  eventEmitter.emit('dispatch',{ type: SET_VISIBILITY_FILTER, filter })
}
