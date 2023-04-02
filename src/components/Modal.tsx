import React, {useState, useEffect} from 'react';
import { ObjectCar } from '../typeObjectCar';
import './Modal.css';

interface ChangeCardCar {
    onChange: (car: ObjectCar) => void
    onClose: () => void
    car: ObjectCar
}

export function Modal({onChange, onClose, car}: ChangeCardCar) {
    const [value, setValue] = useState(car)
    const [error, setError] = useState('')
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setError(' ');

        if (
            value.name.trim().length === 0 || 
            value.model.trim().length === 0 || 
            value.price.toString().trim().length === 0) {
                setError('Data is not filled')
                return
        }

        onChange(value)
        onClose()
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(prev => ({ ...prev, [event.target.title]: event.target.value }));
    }

    return (
        <>
        <div className='modal-bg' onClick={onClose} />
        <div className='modal'>
            <h1 style={{margin: "0 auto"}}>Make changes</h1>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    placeholder='Name'
                    title='name'
                    value={value.name}
                    onChange = {changeHandler}
                />
                <input 
                    type="text" 
                    placeholder='Model'
                    title='model'
                    value={value.model}
                    onChange = {changeHandler}
                />
                <input 
                    type="text" 
                    placeholder='Price'
                    title='price'
                    value={value.price}
                    onChange = {changeHandler}
                />
                {error && <p style={{margin: '0 0 5px 0' , color: 'red', textAlign: 'center'}}>{error}</p>}
                <button>Edit</button>
            </form>
        </div>
        </>
    );
}