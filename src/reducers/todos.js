import { todos as todosActions } from '../actions'

function todos(state = { todosList: [] }, action) {
  switch (action.type) {
    case todosActions.ADD_TODOS_LIST:
      let todosList = (state.todosList || []).splice(0)
      todosList.unshift({ name: action.name, list: [], id: (Math.random() + '').substr(2) })
      return Object.assign({}, state, { todosList })
    default:
      return state
  }
}

export default todos
