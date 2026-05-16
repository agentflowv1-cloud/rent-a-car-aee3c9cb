import React from 'react';
import CarCard from '../components/CarCard';
import cars from '../data/cars';
import './styles/CarList.css';

function CarList() {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;