import React, { createContext, useEffect, useState } from "react";
import Addtask from "./components/Addtask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";

export const DeleteHandlerContext = createContext();
export const EditHandlerContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editedText, setEditedText] = useState("");
  const [toggleEditMode, setToggleEditMode] = useState(true);

  useEffect(() => {
    //receive from server
    fetchingData();
  }, []);
  //fetching data
  const fetchingData = async () => {
    try {
      const res = await fetch("https://fluff-cheddar-elephant.glitch.me/tasks");
      if (!res.ok) throw new Error("Something went wrong!");
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  //event erasing
  const handleDelete = (id) => {
    //delete data
    deleteData(id);
    //set updated task
    setTasks(tasks.filter((task) => id !== task.id));
  };

  const deleteData = async (id) => {
    fetch(`https://fluff-cheddar-elephant.glitch.me/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  };

  // editing event
  const handleEdit = (id) => {
    const [editableTarget] = tasks.filter((task) => id === task.id);
    editableTarget.isEditable = true;
    setEditedText(editableTarget.text);

    setTasks([...tasks]);

    setToggleEditMode(false);

    tasks
      .filter((task) => task.id !== id)
      .map((targetedEl) => (targetedEl.isEditable = false));
  };

  //editing task from handler
  const handleEditedSubmitter = (e, id) => {
    e.preventDefault();
    setToggleEditMode(!toggleEditMode);

    const editPersistance = {
      text: editedText,
      id: id,
    };

    // put req.
    putRequest(id, editPersistance);
  };

  const putRequest = async (id, newData) => {
    fetch("https://fluff-cheddar-elephant.glitch.me/tasks/${id}"),
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newData),
      };
  };

  return (
    <div className="bg-gradient-to-t from-gray-900 to-purple-700 min-h-screen text-2xl flex flex-col py-10">
      <DeleteHandlerContext.Provider value={handleDelete}>
        <EditHandlerContext.Provider value={handleEdit}>
          <Header />
          <Addtask tasks={tasks} setTasks={setTasks} />
          <Tasklist
            tasks={tasks}
            error={error}
            loading={loading}
            handleEditedSubmitter={handleEditedSubmitter}
            editedText={editedText}
            setEditedText={setEditedText}
          />
          <Footer />
        </EditHandlerContext.Provider>
      </DeleteHandlerContext.Provider>
    </div>
  );
};

export default App;
