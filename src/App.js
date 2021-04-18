import './App.css';
import TodoList from './components/TodoList'
import {useState, useRef, useEffect} from 'react'

function App() {

  const todoNameRef = useRef()
  const [todos, setTodos] = useState([{id: 1, task: 'do it', completed: false}, {id: 2, task: 'do it come one', completed: false}])


  useEffect(() => {
    const lsTodos = localStorage.getItem("todos")
    setTodos(JSON.parse(lsTodos))
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function addToDo() {
    const todoText = todoNameRef.current.value
    setTodos(prevTodos => {
      return [...prevTodos, {id: todos.length + 1, task: todoText, completed: false}]
    })
    todoNameRef.current.value = ""
  }

  function clearCompleted() {
    const prevTodos = [...todos]
    const newTodos = prevTodos.filter(todo => todo.completed === false)
    console.log(newTodos)
    setTodos(newTodos)
  }

  function handleToggle(id) {
    const prevTodos = [...todos]
    const targetTodo = prevTodos.find(todo => todo.id === id)
    targetTodo.completed = !targetTodo.completed
    setTodos(prevTodos)
  }

  return (
    <div className="App">
      <TodoList todos={todos} handleToggle={handleToggle} />
      <input ref={todoNameRef} type="text" name="todo" />
      <button onClick={addToDo}>Add Todo</button>
      <button onClick={clearCompleted}>Clear All Completed</button>
      <div>{todos.length > 0 && todos.filter(todo => todo.completed === false).length} left to do</div>
    </div>
  );
}

export default App;
