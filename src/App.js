import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import AppContext from "./contexts/AppContext";
import TodoList from "./components/TodoList/TodoList";
import Sprints from "./components/Sprints/Sprints";

function App() {
  return (
    <AppContext>
      <AddTodo />
      <TodoList />
      <Sprints />
    </AppContext>
  );
}

export default App;
