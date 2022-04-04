import React from 'react'
import { useForm } from '../../hooks/useForm';
import "./effects.css";

export const FormWithCustomHook = () => {
  
  
    const [values, handleInputChange] = useForm({
        nombre: '',
        correo: '',
        contraseña: ''
    })

    const {nombre, correo, contraseña} = values;

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log( values );
    }

    return (
    <form onSubmit={ handleSubmit }>
    <h1>FormWithCustomHook</h1>
    <hr/>

    <div className='form-group'>
        <input 
            type="text"
            name='nombre'
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={ nombre }
            onChange={ handleInputChange}
        />
    </div>

    <div className='form-group'>
        <input 
            type="text"
            name='correo'
            className='form-control'
            placeholder='Tu correo'
            autoComplete='off'
            value={ correo }
            onChange={ handleInputChange}
        />
    </div>

    <div className='form-group'>
        <input 
            type="password"
            name='contraseña'
            className='form-control'
            placeholder='Tu Contraseña'
            autoComplete='off'
            value={ contraseña }
            onChange={ handleInputChange}
        />
    </div>
        <button type='submit' className='btn btn-primary'>
            Guardar
        </button>
    </form>
  )
}
