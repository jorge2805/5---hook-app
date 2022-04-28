import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './Style.css'



const initialState = [{
  id: new Date().getTime(),
  toDoName: "Comprar Pollo",
  done: false
}]

export const TodoApp = () => {
  
  const [todos] = useReducer(todoReducer, initialState)
  
  console.log(todos);

  return (
    <>
    <h1>ToDoApp ( { todos.length} )</h1>
    <hr/>

    <div className='row'>
      <div className='col-7'>
        <ul className='list-group list-group-flush'>
            {
              todos.map((todo, i) => (
                <li
                  key={todo.id}
                  className="list-group-item"
                >
                <p className='text-center'> {i + 1}. {todo.toDoName}</p>
                <button className='btn btn-danger'>
                  Borrar
                </button>
                </li>
              ))
            }
        </ul>
      </div>
      <div className='col-5'>
          
          <h4>Add To do</h4>
          <hr/>

          <form>

            <input
              type="text"
              className='form-control'
              name='toDoName'
              placeholder='Comprar...'
              autoComplete='off'
            >

            </input>

            <button className='btn btn-primary mt-1 w-100'>
              Agregar
            </button>

          </form>

      </div>
    </div>

    </> 
  )
}
