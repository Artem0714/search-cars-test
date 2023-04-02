import React, {useState} from "react"
import { ObjectCar } from "../typeObjectCar"
import './CarCard.css';
import { Modal } from "./Modal";

interface CarProps {
    car: ObjectCar
    deleteCard: () => void
    onChangeToApp: (car: ObjectCar) => void
}

export function CarCard(props: CarProps) {
    const [modal, setModal] = useState(false);

    const changeHandler = (car: ObjectCar) => {
        console.log(car);
        
        props.onChangeToApp(car)
        setModal(false);
    }

    function openModal() {
        setModal(true)
    }

    return (
        <>
            {modal && <Modal car={props.car} onChange={changeHandler} onClose={() => setModal(false)}/>}
            <div className="card">
                <h2>{props.car.name} {props.car.model}</h2>
                <div className="car-color-box" style={{width: "50px", height: "50px", background: props.car.color}}>{props.car.color}</div>
                <p>{props.car.year}</p>
                <p>{props.car.price}</p>
                <button onClick={props.deleteCard}>Delete</button>
                <button onClick={openModal}>Edit</button>
            </div>
        </>
    )
}

export default CarCard;