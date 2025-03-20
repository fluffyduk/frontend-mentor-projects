import React from 'react'
import {BsCheck} from 'react-icons/bs'

const Check = ({ isCompleted }) => {
  return (
    <div className={`border-2 border-pink-400 rounded-lg w-6 h-6 mr-3 
    ${isCompleted ? 'bg-pink-400' : ''}
    flex items-center justify-center`}>
        {isCompleted && <BsCheck size={24} className='text-gray-900' />}
    </div>
  )
}

export default Check