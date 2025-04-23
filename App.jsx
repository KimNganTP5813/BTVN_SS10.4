// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import TodoForm from "./TodoList/TodoForm";

function App() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center font-[Inter]">
      <TodoForm />
    </div>
  );
}

export default App;
