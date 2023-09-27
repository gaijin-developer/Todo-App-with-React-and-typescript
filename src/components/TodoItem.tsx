import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: { id: string; text: string };
  removeTodo: (id: string) => void;
}> = (props) => {
  //deleteTodo
  const deleteTodo = (event: React.MouseEvent) => {
    props.removeTodo(props.item.id);
  };
  return (
    <li onClick={deleteTodo} className={classes.todoItem}>
      {props.item.text}
    </li>
  );
};
export default TodoItem;
