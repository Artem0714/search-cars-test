import React, {useState} from 'react';
import './Modal.css';

export function Modal() {
    const [value, setValue] = useState([])

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <>
        <div className='modal-bg'>
            <div className='modal'>
                <h1 style={{margin: "0 auto"}}>Make changes</h1>
                <form onSubmit={submitHandler}>
                    <input 
                        type="text" 
                        placeholder='Name' 
                        value={value}
                        onChange = {changeHandler}
                    />
                    <input type="text" placeholder='Modal'></input>
                    <input type="text" placeholder='Price'></input>
                    <button>Edit</button>
                </form>
            </div>
        </div>
        </>
    );
}