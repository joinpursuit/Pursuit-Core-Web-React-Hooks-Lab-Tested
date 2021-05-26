import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function Todo({ todo, deleteToDo }) {
  useEffect(() => {
    toast.success(`New todo added: ${todo.text}`);
    return () => {
      toast.error(`Todo deleted: ${todo.text}`);
    };
  }, []);

  return (
    <div>
      <li className="todos">
        {todo.text}
        <button onClick={() => deleteToDo(todo)}>x</button>
      </li>
    </div>
  );
}
