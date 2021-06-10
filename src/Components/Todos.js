import React from "react";
import Todo from "./Todo";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

function Todos(props) {
  const prevLengthRef = useRef();
  useEffect(() => {
    prevLengthRef.current = props.todos.length;
  });
  const prevLength = prevLengthRef.current;

  useEffect(() => {
    if (prevLength !== props.todos.length) {
      toast(`Remaining todos: ${props.todos.length}`, {
        className: "Toastify__toast--default",
      });
    }
  });

  return (
    <ul id="todos">
      {props.todos.map((todo) => {
        return (
          <Todo todo={todo} deleteToDo={props.deleteToDo} key={todo.uuid} />
        );
      })}
    </ul>
  );
}
export default Todos;
