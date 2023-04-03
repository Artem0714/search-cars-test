import React from 'react';
import { useCar } from './hooks/cars';
import './App.css';
import CarCard from './components/CarCard';
import { ErrorMessage } from './components/ErrorMessage';

export function App() {
  const {cars, error, deleteCardCar, changeCardCar, sortCardCar} = useCar();

  // const sortHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   sortCardCar(event.target.value);
  // }

  return (
    <div className='container'>
      <select onChange={event => sortCardCar(event.target.value)}>
        <option value='id'>Default</option>
        <option value='name'>Name</option>
        <option value='price'>Price</option>
      </select>
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