import React, { useState } from 'react'

const CreateTodoField = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    return (
        <div className='flex items-center mb-4 rounded-2xl bg-gray-800 p-5 w-full justify-between'>
            <input type='text' onChange={e => setTitle(e.target.value)} value={title}
            onKeyDown={e => e.key === 'Enter' && addTodo(title)}
            className='bg-transparent w-full border-none outline-none border-2 border-gray-800'
            placeholder='Add a task'/>
        </div>
    )
}

export default CreateTodoField