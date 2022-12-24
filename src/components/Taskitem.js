import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { DeleteHandlerContext } from "../App";

const Taskitem = ({ task }) => {
  const handleDelete = useContext(DeleteHandlerContext);

  return (
    <div className="task-item flex justify-between items-center bg-gray-900 p-5 rounded hover:bg-gradient-to-r hover:from-purple-800 hover:to-gray-800 group">
      <div className="task-item-left flex gap-3">
        <span>
          <input type="checkbox" className="accent-purple-400" />
        </span>
        <p className="text-gray-500 group-hover:text-purple-400">{task.text}</p>
      </div>
      <div className="task-item-right flex gap-3 text-gray-500  cursor-pointer duration-300">
        <span className="group-hover:text-purple-400">
          <BiEdit />
        </span>
        <button
          onClick={() => handleDelete(task.id)}
          className="group-hover:text-pink-400"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Taskitem;
