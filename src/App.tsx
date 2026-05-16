import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarList from './pages/CarList';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;