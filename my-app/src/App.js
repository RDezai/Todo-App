import React, { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import TodoList from "./components/TodoList"; 
import { v4 } from "uuid";
import { useLocalStorage } from './customHooks/useLocalStorage';
import styled from 'styled-components';

const  AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   min-height: 100vh;
  background-color: #f8f8d4;
  font-family: Arial, Helvetica, sans-serif;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color:#007aff ;
`;

function App() {
  const [todos, setTodos, removeTodo] = useLocalStorage('todos', [
    {
      id: v4(),
      title: "Einkaufen",
      isCompleted: false
    },
    {
      id: v4(),
      title: "Sport",
      isCompleted: false
    }
  ]);

  const [count, setCount] = useState(0);

    useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
    if (todosFromLocalStorage && todosFromLocalStorage.length > 0) {
      setCount(todosFromLocalStorage.length);
      console.log(todos);
    }
  }, [setTodos, todos]);

  const checkTodo = (id) => {
    console.log(id);
    setTodos(
      todos.map(todo => {
        if (todo.id === id)
          todo.isCompleted = !todo.isCompleted;
        console.log(todo.isCompleted)
        return todo;
      })
    );
  };
  const deleteTodo = (id) => {
    removeTodo(id);
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const addTodo = (text) => {
    if (count < 5) {
      const newTodo = {
        id: v4(),
        title: text,
        isCompleted: false
      };
      setTodos([...todos, newTodo]);
      setCount(count + 1);
    } else {
      alert("Maximum an Todos ist erreicht!");
    }
  };  
  return (
    <AppWrapper>
      <Title>Todo-Liste</Title>
      <TodoForm addTodo={ addTodo} />
      <TodoList todos={todos} checkTodo={ checkTodo} deleteTodo={deleteTodo} />
     
    </AppWrapper>
  );
}

export default App;
