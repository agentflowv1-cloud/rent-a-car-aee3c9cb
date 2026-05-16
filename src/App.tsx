import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/app.css';
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}
export default App;