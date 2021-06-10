import React, { useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import Todos from "./Components/Todos";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Form from "./Components/Form";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const olderToDo = useRef();

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = {
      text: input,
      uuid: uuidv4(),
    };
    AddToDo(newToDo);
    setInput("");
  };

  const AddToDo = (todo) => {
    olderToDo.current = todos;
    const prevTodos = olderToDo.current;
    setTodos([...prevTodos, todo]);
  };

  const deleteToDo = (todo) => {
    const filterTodos = todos.filter((item) => {
      return todo.uuid !== item.uuid;
    });
    setTodos(filterTodos);
  };

  return (
    <div className="App">
      <ToastContainer />
      <h2>Todo List</h2>
      <Form
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Todos todos={todos} deleteToDo={deleteToDo} />
    </div>
  );
}
export default App;
