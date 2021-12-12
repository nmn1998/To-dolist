import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";
import dateFnsFormat from "date-fns/format";

const AddTask = ({ onCancel, onAdd }) => {
  const FORMAT = "dd/MM/yyyy";
  const [task, setTask] = useState("");
  const [date, setDate] = useState(null);

  const inputHandler = (event) => {
    setTask(event.target.value);
  };

  const sendTask = () => {
    onAdd(task, date);
    onCancel();
    setTask("");
  };

  function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
  }

  return (
    <div className="task-dialog">
      <input value={task} onChange={inputHandler} />
      <div className="action-container">
        <div className="btn-container">
          <button disabled={!task} className="add-btn" onClick={sendTask}>
            Add task
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            cancel
          </button>
        </div>
        <div className="calendar">
          <DayPickerInput
            onDayChange={(day) => setDate(day)}
            placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
            formatDate={formatDate}
            format={FORMAT}
            dayPickerProps={{
              modifiers: {
                disabled: [{ before: new Date() }],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddTask;
