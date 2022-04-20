import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    
    
    const [show, setShow] = useState(true);
  function HandleOnClick() {
    setShow(!show);
  }
  
  return (
    <>
    <h1>RealExampleRef</h1>

    <button className='btn btn-primary mb-4'
            onClick={HandleOnClick}
    >
        Mostrar/Ocultar
    </button>
    
    {show && <MultipleCustomHooks/>}



    
    </>
  )
}
