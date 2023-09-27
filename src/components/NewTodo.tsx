import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/Todos-context";

const NewTodo: React.FC = () => {
  const todoTextInput = useRef<HTMLInputElement>(null);

  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredValue = todoTextInput.current!.value;
    if (enteredValue.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredValue);
    todoTextInput.current!.value = "";
  };

  return (
    <div className={classes.newTodoContainer}>
      <form action="" onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="">
          <input
            type="text"
            ref={todoTextInput}
            placeholder="Please enter a todo"
            className={classes.formControl}
          />
        </label>
        <button className={classes.submitButton}>Add Todo</button>
      </form>
    </div>
  );
};
export default NewTodo;
