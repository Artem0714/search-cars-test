import React, {useCallback, useState} from 'react';
import { ObjectCar } from '../typeObjectCar';
import './css/Modal.css';

interface ChangeCardCar {
    onChange: (car: ObjectCar) => void
    onClose: () => void
    car: ObjectCar
}

export function Modal({onChange, onClose, car}: ChangeCardCar) {
    const [value, setValue] = useState(car)
    const [error, setError] = useState('')
    
    const submitHandler = useCallback((event: React.FormEvent) => {
        event.preventDefault();
        setError(' ');

        if (value.name.trim().length === 0 || 
            value.model.trim().length === 0 || 
            value.price.toString().trim().length === 0) {
            setError('Data is not filled')
            return
        }

        onChange(value)
        onClose()
    }, [onChange, value])

    const cancelHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClose()
    } 

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(prev => ({ ...prev, [event.target.title]: event.target.value }));
    }

    return (
        <>
            <div className='modal-bg' onClick={onClose} />
            <div className="modal-sticky-box">
                <div className="modal-sticky">
                    <div className='modal'>
                        <h1 className='modal-title'>Make changes</h1>
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
                            {error && <p className='modal-error'>{error}</p>}
                            <button type='submit'>Edit</button>
                            <button onClick={cancelHandler}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}