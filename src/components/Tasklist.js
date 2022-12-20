import React from "react";
import Taskitem from "./Taskitem";

const Tasklist = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-900 container mx-auto p-10">
      <Taskitem />
      <Taskitem />
    </div>
  );
};

export default Tasklist;
