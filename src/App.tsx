import React, { useEffect, useRef } from 'react';
import { YMap } from "@yandex/ymaps3-types";

import { useCar } from './hooks/cars';
import './App.css';
import CarCard from './components/CarCard';
import { ErrorMessage } from './components/ErrorMessage';
import SortSelect from './components/SortSelect';

export function App() {
  const {cars, error, deleteCardCar, changeCardCar, sortCardCar} = useCar();
  const mapRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    let map: YMap | null = null;

    ymaps3.ready.then(() => {
      if (!mapRef.current) return;

      map = new ymaps3.YMap(mapRef.current, {
        location: { center: [37.64, 55.76], zoom: 10 },
      });

      map.addChild(new ymaps3.YMapDefaultSchemeLayer({}));
    });
  }, []);

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
      <div ref={mapRef} className="map"></div>
    </div>
  );
}