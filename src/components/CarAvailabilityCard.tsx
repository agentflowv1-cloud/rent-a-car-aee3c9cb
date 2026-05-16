import React from 'react';

interface Car {
  make: string;
  model: string;
  year: number;
  available: boolean;
}

interface CarAvailabilityCardProps {
  car: Car;
}

function CarAvailabilityCard({ car }: CarAvailabilityCardProps) {
  const availabilityClass = car.available ? 'bg-green-200' : 'bg-red-200';

  return (
    <div className={`card w-80 bg-base-100 shadow-xl ${availabilityClass} p-4`}>
      <h2 className="card-title">{car.year} {car.make} {car.model}</h2>
      <p className="text-lg">Availability: {car.available ? 'Available' : 'Not Available'}</p>
    </div>
  );
}

export default CarAvailabilityCard;