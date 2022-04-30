import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './Style.css'
import { TodoList } from './TodoList';
import { AddToDo } from './AddToDo';



const init = () => {
  return JSON.parse(localStorage.getItem('ToDos')) || [];
};

export const TodoApp = () => {
  
  const [todos, dispach] = useReducer(todoReducer, [], init)

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

  const handleToogle = (ToDoID) => {
    dispach({
      type: 'toogle',
      payload: ToDoID
    });
  }

  const handleAddToDo = (newToDo) =>{
    dispach({
      type: 'add',
      payload: newToDo
    });
  }

  return (
    <>
    <h1>ToDoApp ( { todos.length} )</h1>
    <hr/>

    <div className='row'>
      <div className='col-7'>
          <TodoList 
            todos = {todos} 
            handleToogle = {handleToogle} 
            handleDelete = {handleDelete}
          />
      </div>
      <div className='col-5'>
          
          <h4>Add To do</h4>
          <hr/>

          <AddToDo
            handleAddToDo = {handleAddToDo}
          />


      </div>
    </div>

    </> 
  )
}
