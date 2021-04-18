import React from 'react'

export default function Todo({todo, handleToggle}) {

    function handleClick() {
        console.log(todo)
        handleToggle(todo.id)
    }

    return (
        <div>
            <input onChange={handleClick} type="checkbox" checked={todo.completed} />
            {todo.task} | {todo.id}
        </div>
    )
}
