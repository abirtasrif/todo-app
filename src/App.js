import React from "react";
import Addtask from "./components/Addtask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";

const App = () => {
  return (
    <div className="bg-gradient-to-t from-gray-900 to-purple-700 min-h-screen text-2xl flex flex-col py-10">
      <Header />
      <Addtask />
      <Tasklist />
      <Footer />
    </div>
  );
};

export default App;
