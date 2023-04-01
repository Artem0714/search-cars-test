import React from "react"
import { ObjectCar } from "../typeObjectCar"
import './CarCard.css';

interface CarProps {
    car: ObjectCar
}

export function CarCard(props: CarProps) {
    return (
        <div className="card">
            <h2>{props.car.name} {props.car.model}</h2>
            <div className="car-color-box" style={{width: "50px", height: "50px", background: props.car.color}}>{props.car.color}</div>
            <p>{props.car.year}</p>
            <p>{props.car.price}</p>
        </div>
    )
}

export default CarCard;