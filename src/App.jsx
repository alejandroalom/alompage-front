import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Corazon from './pages/organs/Corazon';
import Pulmon from './pages/organs/Pulmon';
import Higado from './pages/organs/Higado';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/corazon" element={<Corazon />} />
        <Route path="/pulmon" element={<Pulmon />} />
        <Route path="/higado" element={<Higado />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;












