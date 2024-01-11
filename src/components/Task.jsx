import { useState } from "react";

const Task = ({ List, setList }) => {
  const [task, setTask] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    if (task !== "") {
      setList([...List, task]);
      setTask("");
    }
  };

  return (
    <form
      className="adding"
      onSubmit={(event) => {
        addTask(event);
      }}
    >
      <input
        type="text"
        placeholder="new task"
        name="task"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <button>Add task</button>
    </form>
  );
};

export default Task;
