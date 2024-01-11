const TasksList = ({ List, setList }) => {
  const removeTask = (index) => {
    const listCopy = [...List];
    listCopy.splice(index, 1);
    setList(listCopy);
  };

  return (
    <div className="list">
      {List.map((elt, index) => {
        return (
          <div key={index} className="task-item">
            <input type="checkbox" />
            <div className="task-description"> {elt}</div>
            <button
              onClick={() => {
                removeTask(index);
              }}
            >
              SUPPR
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
