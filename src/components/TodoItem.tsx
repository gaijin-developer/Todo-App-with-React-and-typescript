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
    <li className={classes.todoItem}>
      <span>{props.item.text}</span>
      <span>
        <img
          className={classes.closeButton}
          src="/images/close-button-svgrepo-com.svg"
          alt="close button"
          onClick={deleteTodo}
        />
      </span>
    </li>
  );
};
export default TodoItem;
