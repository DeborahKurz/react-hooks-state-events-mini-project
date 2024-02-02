import React from "react";
import Task from "./Task.js"

function TaskList({ tasks, setTasks }) {
  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.text !== id)
    setTasks(updatedTasks)
  }

  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
          key={task.text}
          task={task}
          onDeleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;