import { combineReducers } from 'redux'

export type Todo = {
  id: number
  title: string
}

type TaskState = {
  tasks: Todo[]
}

const initialState: TaskState = {
  tasks: [],
}

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    case 'DELETE_TODO':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todo: todoReducer,
})

export default rootReducer
