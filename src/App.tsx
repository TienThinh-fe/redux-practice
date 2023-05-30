import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './stores/action'

function App() {
  const tasks = useSelector((state: any) => state.todo.tasks)
  const dispatch = useDispatch()

  const [todo, setTodo] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()

    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 1000),
        title: todo,
      }),
    )
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'>Todo</label>
        <input
          ref={inputRef}
          type='text'
          value={todo}
          onChange={(e: any) => {
            setTodo(e.target.value)
          }}
        />
        <br />
        <button type='submit'>Add</button>
      </form>
      <ul
        style={{
          marginTop: '2rem',
        }}
      >
        {tasks.map((task: any) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <br />
            <button
              onClick={() => {
                dispatch(deleteTodo(task))
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
