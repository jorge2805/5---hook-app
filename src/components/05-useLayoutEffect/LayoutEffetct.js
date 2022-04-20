import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './LayoutEffetct.css'

export const LayoutEffetct = () => {
  

    const {state, increment } = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const {quote} = !!data && data[0];

    const paragrafRef = useRef();
    const [infoP, setInfoP] = useState({})


    useLayoutEffect(() => {
        setInfoP(paragrafRef.current.getBoundingClientRect());        
    }, [quote])

    return (
    <div>
        <h1>LayoutEffetct</h1>
        <hr/>
            <blockquote className='blockquote'>
                <p 
                    ref={paragrafRef}
                    className='mb-10'> 
                    {quote} </p>
            </blockquote>
        
        <pre>
            {
                JSON.stringify(infoP,null,3)
            }
        </pre>

        <button 
            onClick={() => increment()}
            className='btn btn-primary'
        >
            Siguiente
        </button>



    </div>
  )
}
