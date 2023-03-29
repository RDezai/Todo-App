import React from 'react'
import Todo from './Todo'
const TodoList = ({ todos, checkTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return null;
  }
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          checkTodo={checkTodo}
          id={todo.id}
          isCompleted={todo.isCompleted}
          deleteTodo={ deleteTodo} />
       ))}
    </div>
  )
}

export default TodoList