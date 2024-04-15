import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ScriptPage from './pages/ScriptPage/ScriptPage';
import HomePage from './pages/FullPage';
import RankPage from './pages/RankPage/RankPage';
import LoginPage from './pages/UserPage/LoginPage';
import MyPage from './pages/MyPage/DashBoard';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/script" element={<ScriptPage />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
