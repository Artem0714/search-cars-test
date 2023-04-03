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
                <div>
                    <h2>{props.car.name} {props.car.model}</h2>
                    <div className="card-color-box" style={{background: props.car.color}}></div>
                    <p style={{marginBottom: "5px"}}>Year: {props.car.year}</p>
                    <p>Price: <span style={{fontWeight: "600"}}>{props.car.price}</span></p>
                </div>
                <div className="card-button-box">
                    <button onClick={props.deleteCard}>Delete</button>
                    <button onClick={openModal}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default CarCard;