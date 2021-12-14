import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskItems from "./TaskItems";

const TaskHeader = {
  INBOX: "Inbox",
  TODAY: "Today",
  NEXT: "Next 7 days",
};

const Task = ({ selectedTab }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([]);

  const cancelHandler = () => setShowAddTask(false);

  const addTaskHandler = (text, date) => {
    const addNewTask = {
      text,
      date: date || new Date(),
      id: Math.random().toString(),
    };
    setTask((prevState) => {
      return [addNewTask, ...prevState];
    });
  };
  return (
    <div className="tasks">
      <h1>{TaskHeader[selectedTab]}</h1>

      {selectedTab === "INBOX" && (
        <div
          className="items"
          onClick={() => setShowAddTask((prevState) => !prevState)}
        >
          <span className="plus">+</span>
          <span className="add-task">Add Task</span>
        </div>
      )}
      {showAddTask && (
        <AddTask onCancel={cancelHandler} onAdd={addTaskHandler} />
      )}

      {tasks.length > 0 ? (
        <TaskItems tasks={tasks} selectedTab={selectedTab} />
      ) : (
        <p>No Tasks Yet.</p>
      )}
    </div>
  );
};

export default Task;
