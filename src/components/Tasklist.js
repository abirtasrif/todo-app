import React from "react";
import Taskitem from "./Taskitem";

const Tasklist = ({
  tasks,
  error,
  loading,
  handleEditedSubmitter,
  editedText,
  setEditedText,
}) => {
  return (
    <div className="flex flex-col gap-2 bg-gray-900 container mx-auto p-10 text-gray-400">
      {loading ? (
        <p className="text-center">{error ? error : "Loading..."}</p>
      ) : (
        tasks.length === 0 && (
          <p className="text-center">No task to show, Enjoy your life ! </p>
        )
      )}
      {tasks.map((task) => (
        <Taskitem
          task={task}
          key={task.id}
          handleEditedSubmitter={handleEditedSubmitter}
          editedText={editedText}
          setEditedText={setEditedText}
        />
      ))}
    </div>
  );
};

export default Tasklist;
