import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Todo = (props) => {
  const { todo, remove } = props;
  useEffect(() => {
    toast.success(`New todo added: ${todo.text}`);
    return () => {
      toast.error(`Todo deleted: ${todo.text}`);
    };
  }, []);

  return (
    <li>
      <span>{todo.text}</span>
      <button
        onClick={() => {
          remove(todo.id);
        }}
      >
        X
      </button>
    </li>
  );
};

export default Todo;
