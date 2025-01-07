import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Description from './pages/Description';
import Statistics from './pages/Statistics';

const App = () => {
  return (
    <div>
      <nav>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/statistics/:count/:brelands" element={<Statistics />} />
      </Routes>
    </div>
  );
};

export default App;
