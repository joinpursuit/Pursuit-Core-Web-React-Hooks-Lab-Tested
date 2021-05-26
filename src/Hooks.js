import React, { useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import Todos from "./Components/Todos";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import Form from "./Components/Form";
import uuidv4 from "uuid/v4";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const prevToDo = useRef();

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text: input,
      uuid: uuidv4(),
    };
    AddToDo(newTodo);
    setInput("");
  };

  const AddToDo = (todo) => {
    prevToDo.current = todos;
    const prevToDos = prevToDo.current;
    setTodos([...prevToDos, todo]);
  };

  const deleteToDo = (todo) => {
    const filterTodos = todos.filter((item) => {
      return todo.uuid !== item.uuid;
    });
    setTodos(filterTodos);
  };

  return (
    <div>
      <ToastContainer />
      <h2> TODO </h2>
      <Form action="" input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Todos todos={todos} deleteToDo={deleteToDo} />
    </div>
  );
}
export default App;
