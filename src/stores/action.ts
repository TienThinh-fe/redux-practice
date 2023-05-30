import { Todo } from './reducer'

export const addTodo = (todo: Todo) => ({
  type: 'ADD_TODO',
  payload: todo,
})

export const deleteTodo = (todo: Todo) => ({
  type: 'DELETE_TODO',
  payload: todo,
})
