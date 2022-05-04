import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
  

    const { setUser } = useContext(UserContext);

    const userX = {
        id: 1,
        name: "Diego",
        lastname: "Cuevas",
        Email: "DiegoCuevas@gmail.com"
    }
  
  return (
    <div>
        <h1>LoginScreen</h1>
        <hr/>

        <button
            className='btn btn-primary'
            onClick={ () => setUser({userX})}
        >
            Login
        </button>
    </div>
  )
}
