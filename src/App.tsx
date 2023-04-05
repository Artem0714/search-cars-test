import React, { useEffect, useRef } from 'react'

import { useCar } from './hooks/cars';
import './App.css';
import CarCard from './components/CarCard';
import { ErrorMessage } from './components/ErrorMessage';
import SortSelect from './components/SortSelect';

export function App() {
  const {cars, error, deleteCardCar, changeCardCar, sortCardCar} = useCar();
  // const mapRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if(mapRef.current) {
  //   new google.maps.Map(mapRef.current, {
  //     zoom: 1,
  //     center: {
  //       lat: 0,
  //       lng: 0
  //     }
  //   })}

  // },[])

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
      {/* <div ref={mapRef} className="map"></div> */}
    </div>
  );
}