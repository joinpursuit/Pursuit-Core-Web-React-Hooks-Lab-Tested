import React, { useEffect, useRef } from "react";
import Todo from "./Todo";
import { toast } from "react-toastify";


function Todos({ todos, deleteToDo }) {
  let prevLength = useRef(0);

  useEffect(() => {
    if (prevLength.current !== todos.length) {
      toast(`Remaining todos: ${todos.length}`, {
        className: 'Toastify__toast--default'
      });
      prevLength.current = todos.length;
    }
  })

  return (
    <ul id="todos">
      {todos.map((todo) => {
        return <Todo todo={todo} deleteToDo={deleteToDo} key={todo.uuid}/>;
      })}
    </ul>
  );
}

export default Todos;
