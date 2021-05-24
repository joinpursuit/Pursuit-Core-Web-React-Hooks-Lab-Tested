import React from "react";
import Todo from "./Todo";
import { toast } from "react-toastify";


class Todos extends React.Component {

  componentDidUpdate(prevProps) {
    const todos = this.props.todos;
    if (prevProps.todos.length !== todos.length) {
      toast(`Remaining todos: ${todos.length}`, {
        className: 'Toastify__toast--default'
      });
    }
  }

  render() {
    const { todos, deleteToDo } = this.props;
    return (
      <ul id="todos">
        {todos.map((todo) => {
          return <Todo todo={todo} deleteToDo={deleteToDo} key={todo.uuid}/>;
        })}
      </ul>
    );
  }
}

export default Todos;
