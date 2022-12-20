import React from "react";
import { GiStabbedNote } from "react-icons/gi";

const Header = () => {
  return (
    <div className="bg-gray-900 container mx-auto p-5 border-b border-dashed border-gray-700 rounded-tl-xl rounded-tr-xl">
      <h2 className="uppercase text-purple-400 font-semibold tracking-wider flex gap-2 items-center">
        <span>
          {" "}
          <GiStabbedNote />{" "}
        </span>
        <span>ToDo App</span>
      </h2>
    </div>
  );
};

export default Header;
