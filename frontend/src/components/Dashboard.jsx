import { useEffect, useState, useContext } from "react";
import axios from "../api/axios";
import TaskCard from "./TaskCard";
import CreateTask from "./CreateTask";
import { AuthContext } from "../auth/authContext";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const { logout } = useContext(AuthContext);

  const fetchTasks = async () => {
    const res = await axios.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h2>My Tasks</h2>
      <button onClick={logout}>Logout</button>

      <CreateTask refresh={fetchTasks} />

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} refresh={fetchTasks} />
      ))}
    </div>
  );
}