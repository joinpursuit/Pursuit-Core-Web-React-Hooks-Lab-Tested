import React from "react";
import Todo from "./Todo";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Todos(props) {
  const previous = prevLength.current;
  const prevLength = useRef();
  useEffect(() => {
    prevLength.current = props.todos.length;

    if (previous !== props.todos.length) {
      toast(`Remaining todos: ${props.todos.length}`, {
        className: "Toastify__toast--default",
      });
    }
  });
  return (
    <ul id="todos">
      {props.todos.map((todo) => {
        return <Todo todo={todo} deleteToDo={props.deleteToDo} key={todo.uuid} />;
      })}
    </ul>
  );
}
export default Todos;
