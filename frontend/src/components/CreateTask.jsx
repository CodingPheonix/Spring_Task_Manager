import { useState } from "react";
import axios from "../api/axios";

export default function CreateTask({ refresh }) {
  const [title, setTitle] = useState("");

  const createTask = async () => {
    await axios.post("/tasks", { title });
    setTitle("");
    refresh();
  };

  return (
    <div>
      <input
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createTask}>Add</button>
    </div>
  );
}