import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css'

import { useCounter } from '../../hooks/useCounter'
import { heavyProcess } from '../../helpers/heavyProcess';

export const MemoHook = () => {
  
  const {state, increment} = useCounter(5000);
    
    const [show, setShow] = useState(true)

    const heavyProcessMemo = useMemo(() => heavyProcess(state), [state])

  return (
    <>
        <h1>MemoHook</h1>
        <h3>Contador: <small> {state} </small></h3>

        <p>{heavyProcessMemo}</p>

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
