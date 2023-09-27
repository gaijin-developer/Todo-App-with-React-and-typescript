import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/Todos-context";

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <div className="main-container">
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
};

export default App;
