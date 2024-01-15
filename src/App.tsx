import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScriptPage from './pages/ScriptPage/ScriptPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ScriptPage />} />
    </Routes>
  );
}

export default App;
