import React from "react";
import Todo from "../models/todo";
import { useState } from "react";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [mytodos, setMyTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setMyTodos((initialVal) => [...mytodos, newTodo]);
  };
  const removeTodo = (id: string) => {
    setMyTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const contextValue: TodosContextObj = {
    items: mytodos,
    addTodo: addTodoHandler,
    removeTodo: removeTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
