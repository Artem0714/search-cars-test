import React from "react"
import { ObjectCar } from "../typeObjectCar"

interface CarProps {
    car: ObjectCar
}

export function CarCard(props: CarProps) {
    return (
        <div>{props.car.name}</div>
    )
}