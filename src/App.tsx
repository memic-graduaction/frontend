import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ScriptPage from './pages/ScriptPage/ScriptPage';
import HomePage from './pages/FullPage';
import RankPage from './pages/RankPage/RankPage';
import RecordPage from './pages/RecordPage/RecordPage';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/script" element={<ScriptPage />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/record" element={<RecordPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
