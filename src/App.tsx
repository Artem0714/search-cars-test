import React, {useState} from 'react';
import { useCar } from './hooks/cars';
import './App.css';
import CarCard from './components/CarCard';
import { ErrorMessage } from './components/ErrorMessage';
export function App() {
  const {cars, error, deleteCardCar, changeCardCar} = useCar();

  return (
    <div className='container'>
      {error && <ErrorMessage />}
      {!error && cars.map((car =>
        <CarCard 
          key={car.id} 
          car={car}
          deleteCard={() => deleteCardCar(car)}
          onChangeToApp={changeCardCar}
        />
      ))}
    </div>
  );
}