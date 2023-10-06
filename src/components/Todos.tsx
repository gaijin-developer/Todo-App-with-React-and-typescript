import React, { useContext } from "react";
import { TodosContext } from "../store/Todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const TodosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todosContainer}>
      {TodosCtx.items.map((item) => (
        <TodoItem key={item.id} item={item} removeTodo={TodosCtx.removeTodo} />
      ))}
      {TodosCtx.items.length < 1 ? (
        <p className={classes.NoTodos}>You currently have no todos</p>
      ) : null}
    </ul>
  );
};
export default Todos;
