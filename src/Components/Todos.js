import React from "react";
import Todo from "./Todo";
import { useEffect } from 'react';
import { toast } from "react-toastify";


const Todos = ({ todos, deleteToDo }) => {
  useEffect(() => {
    toast(`Remaining todos: ${todos.length}`, {
      className: 'Toastify__toast--default'
    });

  }, [todos])

  return (
    <ul id="todos">
      {todos.map((todo) => {
        return <Todo todo={todo} deleteToDo={deleteToDo} key={todo.uuid} />;
      })}
    </ul>
  );

}

export default Todos;
