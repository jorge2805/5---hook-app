import React, { useEffect, useState } from 'react'

export const Message = () => {
    
    const [{x , y}, setCoordenadas] = useState({
        x:'',
        y:''
    })

    useEffect(() => {
      console.log('mounted component')
      
      const FuncionParaMouseMove = (e) => {
        setCoordenadas({
            x: e.x,
            y: e.y
        })
      }

      window.addEventListener('mousemove', FuncionParaMouseMove );

      return () => {
        console.log('unmounted component')
        window.removeEventListener('mousemove', FuncionParaMouseMove );
      }
    }, []);    

  
    return (
    <>
        <h2>Go For it!!!!</h2>
        <h3>X: {x}</h3>
        <h3>Y: {y}</h3>
    </>
    )
}
