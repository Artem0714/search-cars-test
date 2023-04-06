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
        location: { center: [34.766185, 57.908542], zoom: 6 },
      });

      map.addChild(new ymaps3.YMapDefaultSchemeLayer({}));

      map.addChild(new ymaps3.YMapDefaultFeaturesLayer({}));
      
      cars.forEach(item => {
        let element = document.createElement("div");
        
        element.innerText = item.name;
        element.className = "marker";
        if (item.color === "white") {
          element.style.color = "black";
        }
        element.style.backgroundColor= item.color;
        
        map?.addChild(new ymaps3.YMapMarker({
          coordinates: [item.longitude, item.latitude]
        }, element)
        );
      })
    });
    
    return () => map?.destroy()
  }, [cars]);

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