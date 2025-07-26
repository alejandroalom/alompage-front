import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Corazon from './pages/organs/Corazon';
import Pulmon from './pages/organs/Pulmon';
import Higado from './pages/organs/Higado';
import Intestinos from './pages/organs/Intestinos';
import Estomago from './pages/organs/Estomago';
import Login from './pages/Login';
import Denied from './pages/Denied';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/corazon" element={<Corazon />} />
        <Route path="/pulmon" element={<Pulmon />} />
        <Route path="/higado" element={<Higado />} />
        <Route path="/intestinos" element={<Intestinos />} />
        <Route path="/estomago" element={<Estomago />} />
        <Route path="/login" element={<Login />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/dashboard" element={<div style={{ padding: '4rem', textAlign: 'center' }}><h1>Dashboard privado</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;














