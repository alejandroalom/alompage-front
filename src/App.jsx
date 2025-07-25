import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Corazon from './pages/organs/Corazon';
import Pulmon from './pages/organs/Pulmon';
import Higado from './pages/organs/Higado';
// etc.

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/corazon" element={<Corazon />} />
      <Route path="/pulmon" element={<Pulmon />} />
      <Route path="/higado" element={<Higado />} />
      {/* etc. */}
    </Routes>
  );
};

export default App;











