import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 container mx-auto text-center p-10 text-sm text-purple-700 rounded-bl-xl rounded-br-xl'>
      <p>&copy; {new Date().getFullYear()}Todo App. All Right Reserved by <b>Abir Tasrif</b></p>
    </div>
  )
}

export default Footer;