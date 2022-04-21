import React from 'react'

export const Small = React.memo(({value}) => {
  
  console.log("Se llama Small")

  return (
    <small>{value}</small>
  )
})
