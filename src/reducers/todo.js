import {
  TODO_ADD,
  TODOS_LOAD,
  TODO_REMOVE,
  CURRENT_UPDATE,
  TODO_REPLACE
} from '../actions/types'

const initState = {
  todos: [],
  currentTodo: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, currentTodo: '', todos: [...state.todos, action.payload]}
    case TODOS_LOAD:
      return {...state, todos: action.payload}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    case TODO_REPLACE:
      return {...state,
        todos: state.todos
          .map(t => t.id === action.payload.id ? action.payload : t )
      }
    case TODO_REMOVE:
      return {...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      }
    default:
      return state;
  }

}