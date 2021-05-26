import React, { useEffect, useRef } from "react";
import Todo from "./Todo";
import { toast } from "react-toastify";

export default function Todos({ todos, deleteToDo }) {
  let prevTodos = useRef(0);

  useEffect(() => {
    if (prevTodos.current !== todos.length) {
      toast(`Remaining todos: ${todos.length}`, {
        className: "Toastify__toast--default",
      });
      prevTodos.current = todos.length;
    }
  }, []);

  return (
    <ul id="todos">
      {todos.map((todo) => {
        return <Todo todo={todo} deleteToDo={deleteToDo} key={todo.uuid} />;
      })}
    </ul>
  );
}
