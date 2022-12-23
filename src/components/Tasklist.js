import React from "react";
import Taskitem from "./Taskitem";

const Tasklist = ({ tasks }) => {
  return (
    <div className="flex flex-col gap-2 bg-gray-900 container mx-auto p-10">
      {tasks.map((task) => (
        <Taskitem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Tasklist;
