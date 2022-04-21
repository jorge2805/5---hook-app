import React, { useState } from 'react'
import '../02-useEffect/effects.css'

import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
  
  const {state, increment} = useCounter(0);
    
    const [show, setShow] = useState(true)

  return (
    <>
        <h1>Contador: <Small value={state}/></h1>

        <button
            className='btn btn-primary'
            onClick={ () => {increment()} }
        >
            +1
        </button>

        <button
            className='btn btn-outline-primary m-3'
            onClick={ () => {setShow(!show)} }
        >
            Hide/Show {JSON.stringify(show)}
        </button>

        

    </>
  )
}
