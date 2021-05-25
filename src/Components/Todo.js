import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const Todo = ({ prevTodos, todos, todo, deleteToDo }) =>{

  
  useEffect( ()=> {
    toast.success(`New todo added: ${todo.text}`);
  },[])

  useEffect( ()=> {

    if (prevTodos.current !== todos.length-1) {
      toast.error(`Todo deleted: ${todo.text}`);
      prevTodos = todo.length
    } 
  },[todo])


  return (
      <li className="todos">
        {todo.text}
        <button onClick={ () =>deleteToDo(todo) }>x</button>
      </li>
    );
  }


export default Todo;
