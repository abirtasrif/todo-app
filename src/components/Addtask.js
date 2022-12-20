import React from 'react'

const Addtask = () => {
  return (
    <form className='bg-gray-900 container mx-auto flex justify-between p-10'>
      <input type="text" placeholder='What things to do?' className='bg-transparent outline-none border-b-2 py-2 px-5 focus:border-purple-600'/>
      <button type="submit" className='bg-purple-900/30 py-2 px-5 border-2 border-purple-400 rounded text-purple-300 hover:bg-purple-400 hover:text-gray-900'>Add task</button>
    </form>
  )
}

export default Addtask;