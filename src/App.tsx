import React from 'react';
import { useCar } from './hooks/cars';
import './App.css';
import CarCard from './components/CarCard';
import { ErrorMessage } from './components/ErrorMessage';
import SortSelect from './components/SortSelect';

export function App() {
  const {cars, error, deleteCardCar, changeCardCar, sortCardCar} = useCar();

  return (
    <div className='container'>
      <SortSelect sortCardCar={sortCardCar}/>
      {/* <select onChange={event => sortCardCar(event.target.value)}>
        <option value='id'>Default</option>
        <option value='name'>Name</option>
        <option value='price'>Price</option>
      </select> */}
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