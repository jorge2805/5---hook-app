import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'


export const CallbackHook = () => {
  
  const [counter, setCounter] = useState(0);

//   const increment = () => {
//       setCounter(counter + 1);
//   }

  const increment = useCallback(
    (value) => {
        setCounter(x => x + value);
    },
    [setCounter],
  )
  

  return (
    <>
        <h1>CallbackHook {counter}</h1>
        <hr/>

        <ShowIncrement increment = { increment }/>
    </>
  )
}
