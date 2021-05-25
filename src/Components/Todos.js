import React, { useEffect, useRef } from "react";
import Todo from "./Todo";
import { toast } from "react-toastify";


const Todos = ({ deleted, prevTodos, todos, deleteToDo }) => {

  // const prevTodos = useRef(todos.length)
  // console.log(prevTodos)

  // useEffect( () => {
    
  //   if (prevTodos.current !== todos.length) {
  //     toast(`Remaining todos: ${todos.length}`, {
  //       className: 'Toastify__toast--default'
  //     });
  //     prevTodos.current =todos.length
  //   }
    
  // },[todos])

  

    return (
      <ul id="todos">
        {todos.map((todo) => {
          return <Todo deleted={deleted} prevTodos={prevTodos} todos={todos} todo={todo} deleteToDo={deleteToDo} key={todo.uuid}/>;
        })}
      </ul>
    );
  }


export default Todos;
