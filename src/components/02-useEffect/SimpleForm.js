import React, {useEffect, useState} from 'react'
import "./effects.css";
import { Message } from './Message';

export const SimpleForm = () => {
  
  
    const [inputsForm, setinputsForm] = useState({
        nombre: '',
        correo: ''
    })

    const {nombre, correo} = inputsForm;
        
    useEffect( () => {
        // console.log("App Started")
    }, []);
        
    useEffect( () => {
        // console.log("Form has changed")
    }, [inputsForm]);
        
    useEffect( () => {
        // console.log("Email has changed")
    }, [correo]);

    const handleInputChange = ({target}) => {
        setinputsForm({
            ...inputsForm,
            [target.name]: target.value
        });
    }

    return (
    <>
    <h1>useEffect</h1>
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

        {
            nombre=="Jorge" ? <Message/> : null
        }
    </>
  )
}
