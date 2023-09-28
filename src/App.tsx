import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/Todos-context";
import TimeDisplay from "./components/TimeDateDisplay";

const App: React.FC = () => {
  return (
    <div className="AppContainer">
      <TodosContextProvider>
        <div className="main-container">
          <TimeDisplay />
          <NewTodo />
          <Todos />
        </div>
      </TodosContextProvider>
    </div>
  );
};

export default App;
