import React from 'react';
import { CarCard } from './components/CarCard';
import { cars } from './data/cars';

export function App() {
  return (
    <div className="container">
      <CarCard car={cars[0]}/>
    </div>
  );
}