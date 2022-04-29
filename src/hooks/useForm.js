import React, { useState } from 'react'

export const useForm = (initialValue ={}) => {

    const [values, setValues] = useState(initialValue)

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }
    
    const reset = () => {
        setValues(initialValue);
    }

    return [values, handleInputChange, reset];

}
