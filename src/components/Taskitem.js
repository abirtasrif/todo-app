import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Taskitem = () => {
  return (
    <div className="task-item flex justify-between items-center bg-gray-900 p-5 rounded hover:bg-gradient-to-r hover:from-purple-800 hover:to-gray-800 group">
      <div className="task-item-left flex gap-3">
        <span>
          <input type="checkbox" className="accent-purple-400" />
        </span>
        <p className="group-hover:text-purple-400">learn react</p>
      </div>
      <div className="task-item-right flex gap-3 text-gray-500 group-hover:text-purple-400 cursor-pointer duration-300">
        <span>
          <BiEdit />
        </span>
        <span className="task-item-right flex gap-3 text-gray-500 group-hover:text-purple-400 cursor-pointer duration-300">
          <MdDelete />
        </span>
      </div>
    </div>
  );
};

export default Taskitem;
