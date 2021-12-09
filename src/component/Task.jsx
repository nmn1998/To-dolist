import React,{useState} from 'react'


const AddTask = ({onCancel}) => {
  const [task, setTask] = useState("")
return(
<div className="task-dialog">
          <input value={task} onChange={(event) => setTask(event.target.value)}/>
            <div className="action-container">
              <div className="btn-container">
                <button className="add-btn">Add task</button>
                <button className="cancel-btn" onClick={onCancel}>cancel</button>
              </div>
              <div className="calendar"></div>
            </div>
          </div>
)
}
const Task = () => {
  const [showAddTask, setShowAddTask] = useState(false)
    return (
        <div className="tasks">
        <h1>Inbox</h1>
          <div className="items" 
          onClick={() => setShowAddTask((prevState) => (!prevState))}
          >
           <span className="plus">+</span>
           <span className="add-task">Add Task</span>
          </div>
         {showAddTask && <AddTask onCancel={() => setShowAddTask(false)} />}
          
        </div>
    )
}

export default Task
