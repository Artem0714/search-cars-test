import { useEffect, useState } from 'react';
import { ObjectCar } from '../typeObjectCar';

export function useCar () {
    const [cars, setCars] = useState<ObjectCar[]>([]);
    const [error, setError] = useState(false)

    function changeCardCar(car: ObjectCar) {
        setCars(cars.map(item => item.id !== car.id ? item : car))
    }

    function deleteCardCar(car: ObjectCar) {
        setCars(cars.filter(item => item.id !== car.id))
    }

    const fetchCarCard = () => {
    return fetch('https://test.tspb.su/test-task/vehicles')
    .then(response => {
        if (response.ok) {
        return {
            body: response.json(),
            status: "success"
        }
        } else {
        return {status: "failure"}
        }
    })
    }

    async function getCarCard() {
    const result = await fetchCarCard();
    if (result.status === "success") {
        const data = await result.body;
        setCars(data);       
    } else {
        setError(true);
    }
    }

    useEffect(() => {    
    getCarCard()
    }, [])

    return {cars, error, deleteCardCar, changeCardCar};
}