import React, { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('Hey!');
    }, []);

    useEffect(() => {
        console.log('form cambio');
    }, [formState]);

    useEffect(() => {
        console.log('Email cambio');
    }, [email]);

    const handleInputChange = ({target}) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input  type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Name" 
                        autocomplete="off"
                        value={name} 
                        onChange={ handleInputChange}>

                </input>
            </div>

            <div className="form-group">
                <input  type="text" 
                        name="email" 
                        className="form-control" 
                        placeholder="email@gmail.com" 
                        autocomplete="off"
                        value={email} 
                        onChange={ handleInputChange}>

                </input>
            </div>
        </>
    )
}
