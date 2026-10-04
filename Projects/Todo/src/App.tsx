import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function App() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  function handdelChange(e) {
    setTask(e.target.value);
  }
  function addTask() {
    setTodo([...todo, task]);
  }
  function deleteTask(taskName) {
    const newTodo = todo.filter(name => task !== taskName);
    setTodo(newTodo);
  }
  return (
    <div className="bg-slate-950 h-dvh flex justify-center items-center">
      <div className="bg-slate-900 p-4 flex items-center rounded-lg justify-center flex-col gap-3">
        <div className="flex items-center gap-3">
          <input
            onChange={handdelChange}
            placeholder="Enter Task"
            type="text"
            className="text-white bg-slate-800 rounded-md placeholder: text-white focus:ring-2 focus:border-2 p-3"
          />
          <button
            className="bg-slate-800 p-3 text-white font-black rounded-lg text-xl"
            onClick={addTask}
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex flex-col gap-3 w-full">
          {todo.map(name => (
            <div className="py-2 bg-slate-800 rounded-lg text-white flex gap-2 px-4 justify-between items-center w-full">
              <p>{name}</p>
              <MdDelete onClick={() => deleteTask(task)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
