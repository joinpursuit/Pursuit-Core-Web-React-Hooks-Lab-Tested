import React from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Todo(props) {
  useEffect(() => {
    const { todo } = props;
    toast.success(`New todo added: ${todo.text}`);
    return () => {
      toast.error(`Todo deleted: ${todo.text}`);
    };
  }, [props.todo]);

  return (
    <div>
      <li className="todos">
        {props.todo.text}
        <button onClick={() => props.deleteToDo(props.todo)}>x</button>
      </li>
    </div>
  );
}

export default Todo;
