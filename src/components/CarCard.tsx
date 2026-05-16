import React from 'react';
import './styles/CarCard.css';

interface CarCardProps {
  car: {
    id: number;
    name: string;
    availability: 'available' | 'unavailable' | 'limited';
  };
}

function CarCard({ car }: CarCardProps) {
  return (
    <div className="car-card">
      <h2>{car.name}</h2>
      <div className={`availability ${car.availability}`}>{car.availability}</div>
    </div>
  );
}

export default CarCard;