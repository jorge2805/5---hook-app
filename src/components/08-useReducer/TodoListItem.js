import React from 'react'

export const TodoListItem = ({todo, index, handleToogle, handleDelete}) => {
  return (
    <li
    className="list-group-item"
    >
        <p 
            className={ (todo.done === true) ? 'complete' : undefined }
            onClick={ () => handleToogle(todo.id)}
        > 
            {index + 1}. {todo.toDoName}
        </p>

        <button 
            className='btn btn-danger'
            onClick={ () => { 
            handleDelete(todo.id);
            }}
        >
            Borrar
        </button>
    </li>
  )
}
