import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Todo from "./Components/Todo.js";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import { v4 as uuid } from "uuid";

const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [update, setUpdate] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let todos = { text: input, id: uuid() };
    setTodo([...todo, todos]);
    setInput("");
  };

  const removeLi = (id) => {
    let todoLi = todo.filter((elem) => {
      return elem.id !== id;
    });
    setTodo(todoLi);
  };

  useEffect(() => {
    if (update) {
      toast(`Remaining todos: ${todo.length}`);
    }
    setUpdate(true);
  }, [todo]);

  const li = todo.map((todo) => {
    return <Todo key={todo.id} remove={removeLi} todo={todo} />;
  });

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={input}
          placeholder="Enter a Todo"
          type="text"
        />
      </form>
      <ul id="todos">{li}</ul>
      <ToastContainer />
    </div>
  );
};

export default App;
