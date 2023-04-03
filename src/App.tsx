import React, { useEffect } from 'react';
import { useCar } from './hooks/cars';
import './App.css';
import CarCard from './components/CarCard';
import { ErrorMessage } from './components/ErrorMessage';
import SortSelect from './components/SortSelect';
import './ymaps.d.ts';

export function App() {
  const {cars, error, deleteCardCar, changeCardCar, sortCardCar} = useCar();

  useEffect(() => {
    ymaps.ready().then(() => {
      new ymaps.Map("map", {
        center: [55.753995, 37.614069],
        zoom: 12,
        controls: ['smallMapDefaultSet']
      });
      new ymaps.Object({
        geometry: {
          type: "Point",
          coordinates: [55.753995, 37.614069]
        }
      });
    })
  }, [])

  return (
    <div className='container'>
      <SortSelect sortCardCar={sortCardCar}/>
      {error && <ErrorMessage />}
      {!error && cars.map((car =>
        <CarCard 
          key={car.id} 
          car={car}
          deleteCard={() => deleteCardCar(car)}
          onChangeToApp={changeCardCar}
        />
      ))}
      <div id='map' className='map' style={{width: '600px', height: '400px'}}></div>
    </div>
  );
}