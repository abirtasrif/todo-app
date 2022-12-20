import React from 'react';
import { GiStabbedNote } from "react-icons/gi";

const Header = () => {
  return (
    <div>
      <h2 className='uppercase text-purple-500 font-semibold tracking-wider flex gap-2 items-center bg-gray-900 container m-auto p-5 rounded-xl'>
        <span> <GiStabbedNote /> </span>
        <span>To Do App</span>
      </h2>
    </div>
  )
}

export default Header;