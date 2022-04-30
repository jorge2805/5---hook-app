import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './Style.css'
import { useForm } from '../../hooks/useForm'



const init = () => {

  return JSON.parse(localStorage.getItem('ToDos')) || [];

  // return [{
  //   id: new Date().getTime(),
  //   toDoName: "Comprar Pollo",
  //   done: false
  // }]
};

export const TodoApp = () => {
  
  const [todos, dispach] = useReducer(todoReducer, [], init)
  
  const [{toDoName},handleInputChange, reset] = useForm({
    toDoName: ''
  });

  useEffect(() => {
    localStorage.setItem('ToDos',JSON.stringify(todos));
  }, [todos])
  
  const handleDelete = (ToDoID) => {
    const action =  {
      type: 'delete',
      payload: ToDoID
    }
    dispach(action);
  }

  const handelToogle = (ToDoID) => {
    dispach({
      type: 'toogle',
      payload: ToDoID
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (toDoName.trim().length <= 1) {
      return;
    }

    const ToDoItem = {
      id: new Date().getTime(),
      toDoName: toDoName,
      done: false
    }

    const action =  {
      type: 'add',
      payload: ToDoItem
    }

    dispach(action);
    reset();
  };

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
                <p 
                  className={ todo.done === true && 'complete'}
                  onClick={ () => handelToogle(todo.id)}
                > 
                  {i + 1}. {todo.toDoName}
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
              ))
            }
        </ul>
      </div>
      <div className='col-5'>
          
          <h4>Add To do</h4>
          <hr/>

          <form onSubmit={ handleSubmit }>

            <input
              type="text"
              className='form-control'
              name='toDoName'
              placeholder='Comprar...'
              autoComplete='off'
              onChange={handleInputChange}
              value={toDoName}
            >

            </input>

            <button 
              type='submit'
              className='btn btn-primary mt-1 w-100'
            >
              Agregar
            </button>

          </form>

      </div>
    </div>

    </> 
  )
}
