import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const Todo = ({ deleted, prevTodos, todos, todo, deleteToDo }) =>{

  
  useEffect( ()=> {
    toast.success(`New todo added: ${todo.text}`);
  },[])
  
  
  useEffect( ()=> {
    console.log(prevTodos)

    if (prevTodos.length-1 === todos.length  ) {
      toast.error(`Todo deleted: ${deleted}`);
    } 
  },[todos],[prevTodos])
  
  return (
      <li className="todos">
        {todo.text}
        <button onClick={ () =>deleteToDo(todo) }>x</button>
      </li>
    );
  }


export default Todo;
