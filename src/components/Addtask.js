import React, { useState, useRef } from "react";

const Addtask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  const addTaskHandler = (e) => {
    e.preventDefault();
    taskPosting(task);
    inputRef.current.blur();
    setTask("");
  };

  //task submission
  const taskPosting = async (text) => {
    const res = await fetch("https://fluff-cheddar-elephant.glitch.me/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    //realtime update
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
    <form
      className="bg-gray-900 container mx-auto flex justify-between p-10"
      onSubmit={addTaskHandler}
    >
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        type="text"
        placeholder="What things to do?"
        className="bg-transparent outline-none border-b-2 py-2 px-5 focus:border-purple-600 caret-purple-200 text-gray-300"
      />
      <button
        type="submit"
        className="bg-purple-900/30 py-2 px-5 border-2 border-purple-400 rounded text-purple-300 hover:bg-purple-400 hover:text-gray-900 duration-300"
      >
        Add task
      </button>
    </form>
  );
};

export default Addtask;
