import React, { useContext, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { DeleteHandlerContext, EditHandlerContext } from "../App";

const Taskitem = ({
  task,
  handleEditedSubmitter,
  editedText,
  setEditedText,
}) => {
  const handleDelete = useContext(DeleteHandlerContext);
  const handleEdit = useContext(EditHandlerContext);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="task-item flex justify-between items-center bg-gray-900 p-5 rounded hover:bg-gradient-to-r hover:from-purple-800 hover:to-gray-800 group">
      <div className="task-item-left flex gap-3">
        <span>
          <input
            type="checkbox"
            className="accent-purple-400"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </span>

        {task.isEditable && (
          <form onSubmit={() => handleEditedSubmitter(e, task, id)}>
            <input
              className="bg-transparent outline-none border-b-2 border-gray-400 pb-1 focus:border-purple-500"
              type="text"
              required
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </form>
        )}

        {task.isEditable && (
          <p
            className={`text-gray-500 group-hover:text-purple-400 ${
              isChecked
                ? `line-through text-gray-500 group-hover:text-purple-600`
                : null
            }`}
          >
            {task.text}
          </p>
        )}
      </div>
      <div className="task-item-right flex gap-3 text-gray-500  cursor-pointer duration-300">
        <button
          onClick={() => handleEdit(task.id)}
          className="group-hover:text-purple-400"
        >
          <BiEdit />
        </button>
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
