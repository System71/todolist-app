import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";
import TasksList from "./components/TasksList";

function App() {
  const [List, setList] = useState([]);

  return (
    <div className="container">
      <Header />
      <TasksList List={List} setList={setList} />
      <Task List={List} setList={setList} />
    </div>
  );
}

export default App;
