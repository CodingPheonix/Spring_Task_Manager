import axios from "../api/axios";

export default function TaskCard({ task, refresh }) {
  const toggleSubtask = async (subtaskId, completed) => {
    await axios.put(`/subtasks/${subtaskId}`, {
      completed: !completed,
    });
    refresh();
  };

  const progress =
    task.subTasks.length === 0
      ? task.status === "DONE"
        ? 100
        : 0
      : (task.subTasks.filter((s) => s.completed).length /
          task.subTasks.length) *
        100;

  return (
    <div className="card">
      <h3>{task.title}</h3>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        />
      </div>

      {task.subTasks.map((sub) => (
        <div key={sub.id}>
          <input
            type="checkbox"
            checked={sub.completed}
            onChange={() =>
              toggleSubtask(sub.id, sub.completed)
            }
          />
          {sub.title}
        </div>
      ))}
    </div>
  );
}