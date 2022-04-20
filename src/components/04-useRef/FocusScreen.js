import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {
  
  const inputRef = useRef();

  const handleButtonClick = () => {
    inputRef.current.select();
  }

  return (
    <div>
        <h1>Focus Screen</h1>
        <hr/>

        <input 
            ref={ inputRef }
            className='form-control'
            placeholder='Nombre'
        >
        </input>

        <button 
            onClick={ handleButtonClick }
            className='btn btn-outline-primary'>
            Focus
        </button>
    </div>
  )
}
  