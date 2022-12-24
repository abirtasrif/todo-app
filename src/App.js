import React, { createContext, useEffect, useState } from "react";
import Addtask from "./components/Addtask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";

export const DeleteHandlerContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);

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
    } catch (error) {
      console.log(error.message);
    }
  };

  //event erasing
  const handleDelete = (id) => {
    //delete data
    deleteData(id);
    //set updated task
  };

  const deleteData = async (id) => {
    fetch(`https://fluff-cheddar-elephant.glitch.me/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <div className="bg-gradient-to-t from-gray-900 to-purple-700 min-h-screen text-2xl flex flex-col py-10">
      <DeleteHandlerContext.Provider value={handleDelete}>
        <Header />
        <Addtask tasks={tasks} setTasks={setTasks} />
        <Tasklist tasks={tasks} />
        <Footer />
      </DeleteHandlerContext.Provider>
    </div>
  );
};

export default App;
