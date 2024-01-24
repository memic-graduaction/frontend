import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ScriptPage from './pages/ScriptPage/ScriptPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/script" element={<ScriptPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
