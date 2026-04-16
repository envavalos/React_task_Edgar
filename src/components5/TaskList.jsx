import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([
    { taskName: "Estudiar React", completed: false },
    { taskName: "Hacer deberes", completed: true }
  ]);

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  return (
    <div>
    <h1>Task List</h1>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          taskName={task.taskName}
          completed={task.completed}
          toggleTask={() => toggleTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;