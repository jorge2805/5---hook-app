import React from 'react'
import { useForm } from '../../hooks/useForm';

export const AddToDo = ({handleAddToDo}) => {
  
    const [{toDoName},handleInputChange, reset] = useForm({
        toDoName: ''
    });

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

        handleAddToDo(ToDoItem);
    
    
        reset();
      };

  return (
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
  )
}
