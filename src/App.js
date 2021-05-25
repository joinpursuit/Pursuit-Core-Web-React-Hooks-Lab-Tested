import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Todos from "./Components/Todos";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Form from "./Components/Form";
import uuidv4 from "uuid/v4";

const App = () => {

  const [ todos, setTodos ] = useState([])
  const [ input, setInput ] = useState("")
  const [ deleted, setDeleted ] = useState("")
  const [ prevTodos, setPrevTodos ] = useState([])

  useEffect( () =>{


  },[])

 const handleChange = (e) => {
    setInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newToDo = { 
      text: input,
      uuid: uuidv4()
    };

    addToDo(newToDo);
    setInput("");
  };

  const addToDo = (task) => {
    setTodos( todos.concat(task))
  };

  const deleteToDo = (todo) => {
    console.log('to be deleted : ', todo.text)

    const filterTodos = todos.filter((item) => {
      return todo.uuid !== item.uuid;
    });
 
    setPrevTodos(todos)
    setDeleted(todo.text)
    setTodos( filterTodos );
  };

  
   
    return (
      <div className="App">
        <ToastContainer />
        <h2>Todo List</h2>
        <Form
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit} />
        <Todos 
          todos={todos}
          deleted = {deleted}
          prevTodos={prevTodos}
          deleteToDo={deleteToDo} />
      </div>
    );
  }


export default App;
