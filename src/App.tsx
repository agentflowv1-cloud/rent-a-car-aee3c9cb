import React from 'react';
import './App.css';
import CarAvailabilityCard from './components/CarAvailabilityCard';

function App() {
  const cars = [
    { make: 'Toyota', model: 'Camry', year: 2022, available: true },
    { make: 'Honda', model: 'Civic', year: 2021, available: false },
    { make: 'Ford', model: 'Fusion', year: 2020, available: true }
  ];

  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Car Availability</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {cars.map((car, index) => (
          <CarAvailabilityCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;