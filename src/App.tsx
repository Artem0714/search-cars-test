import React from 'react';
import { useCar } from './hooks/cars';
import './App.css';
import CarCard from './components/CarCard';
import { ErrorMessage } from './components/ErrorMessage';
import { Modal } from './components/Modal';

export function App() {
  const {cars, error} = useCar();

  return (
    <div className='container'>
      <Modal/>
      {error && <ErrorMessage />}
      {!error && cars.map((car => <CarCard key={car.id} car={car}/>))}
    </div>
  );
}