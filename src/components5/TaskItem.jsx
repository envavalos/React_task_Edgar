function TaskItem({ taskName, completed, toggleTask }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleTask}
      />
      <span>{taskName}</span>
    </div>
  );
}

export default TaskItem;