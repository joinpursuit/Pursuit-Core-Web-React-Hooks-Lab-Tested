import React from "react";
import { toast } from "react-toastify";

class Todo extends React.Component {
  componentDidMount() {
    const { todo } = this.props;
    toast.success(`New todo added: ${todo.text}`);
  }

  componentWillUnmount() {
    const { todo } = this.props;
    toast.error(`Todo deleted: ${todo.text}`);
  }

  render() {
    const { todo, deleteToDo } = this.props;
    return (
      <li className="todos">
        {todo.text}
        <button onClick={() => deleteToDo(todo)}>x</button>
      </li>
    );
  }
}

export default Todo;
