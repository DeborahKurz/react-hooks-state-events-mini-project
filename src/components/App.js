import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;

/*
1. Look in the browser for the task and category data to pass down from app.
2. task data will go to: TaskList & Task(?)
3. category data will go to: CategoryFilter & NewTaskForm
4. Add State
5. Pass down tasks to TaskList
6. Add prop & state to TaskList
7. TaskList: Display each task using the Task Component (make sure to use a key prop)

*/

/*
App
  |-CategoryFilter
  | |-Render button elements for each category
  |-NewTaskForm
  | |-Render input elements for each category
  |-TaskList
    |-Display a list of tasks using task component
    |-Task.js (NOT CURRENTLY CONNECTED)


-> Use state and events to make components dynamic
-> Implement controlled components: a controlled component is one where the value of an input element is controlled by React's state. This means that the value is stored in state and updated through event handlers. 
-> Focusing On Working With Arrays
*/