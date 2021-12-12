import React from "react";
import dateFnsFormat from "date-fns/format";
import isBefore from "date-fns/isBefore";
import isAfter from "date-fns/isAfter";
import addDays from "date-fns/addDays";
import isToday from "date-fns/isToday";

const TaskItems = ({ selectedTab, tasks }) => {
  const FORMAT = "dd/MM/yyyy";
  let taskToRender = [...tasks];

  if (selectedTab === "NEXT") {
    taskToRender = taskToRender.filter(
      (task) =>
        isAfter(task.date, new Date()) &&
        isBefore(task.date, addDays(new Date(), 7))
    );
  }

  if (selectedTab === "TODAY") {
    taskToRender = taskToRender.filter((task) => isToday(task.date));
  }

  return (
    <div className="task-item-container">
      {taskToRender.map((task) => (
        <div className="task-item">
          <p>{task.text}</p>
          <p>{dateFnsFormat(new Date(task.date), FORMAT)}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskItems;
