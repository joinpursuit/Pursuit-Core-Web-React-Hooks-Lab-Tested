// import React from "react";
// import { ToastContainer } from "react-toastify";
// import Todos from "./Components/Todos";
// import "../node_modules/react-toastify/dist/ReactToastify.css";
// import "./App.css";
// import Form from "./Components/Form";
// import uuidv4 from "uuid/v4";

// class App extends React.Component {
//   state = {
//     todos: [],
//     input: "",
//   };

//   handleChange = (e) => {
//     const { value } = e.target;

//     this.setState(
//       {
//         input: value
//       }
//     );
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { input } = this.state;
//     const newToDo = {
//       text: input,
//       uuid: uuidv4()
//     };
//     this.addToDo(newToDo);
//     this.setState({ input: "" });
//   };

//   addToDo = (todo) => {
//     this.setState((prevState) => {
//       return {
//         todos: [...prevState.todos, todo]
//       };
//     });
//   };

//   deleteToDo = (todo) => {
//     const { todos } = this.state;
//     const filterTodos = todos.filter((item) => {
//       return todo.uuid !== item.uuid;
//     });
//     this.setState({ todos: filterTodos });
//   };

//   render() {
//     const { input, todos } = this.state;

//     return (
//       <div className="App">
//         <ToastContainer />
//         <h2>Todo List</h2>
//         <Form
//           input={input}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit} />
//         <Todos
//           todos={todos}
//           deleteToDo={this.deleteToDo} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Todos from "./Components/Todos";
import Form from "./Components/Form";
import uuidv4 from "uuid/v4";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

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

    addToDo(newToDo);
    setInput("");
  };

  const addToDo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteToDo = (todo) => {
    const filterToDos = todos.filter((item) => {
      return todo.uuid !== item.uuid;
    });

    setTodos(filterToDos);
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
