import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
import CreateTodoField from './CreateTodoField'

const mock_data = [
    {
        id: 1,
        title: "Finish homewotk",
        isCompleted: false,
    },
    {
        id: 2,
        title: "Buy cat food",
        isCompleted: false,
    },
    {
        id: 3,
        title: "Clean kitchen",
        isCompleted: false,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(mock_data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter((el) => el.id !== id))
    }

    const addTodo = (title) => {
        setTodos([{
            id: todos[todos.length - 1].id + 1,
            title: title,
            isCompleted: false
        }, ...todos])
    }

    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-8'>My ToDo List</h1>
            {todos.map(el =>
                <ToDoItem key={el.id} todo={el} changeTodo={changeTodo} removeTodo={removeTodo}/>
            )}
            <CreateTodoField addTodo={addTodo}/>
        </div>
    )
}

export default Home