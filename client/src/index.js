import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/home/home.jsx'
import Airdrops from './pages/airdrops/airdrops'
import News from './pages/news/news.jsx'
import Login from './pages/login/login.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'
import Modify from './pages/modify/modify';
import Airdrop from './pages/airdrop/airdrop.jsx'
import Post from './pages/post/post.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airdrops" element={<Airdrops />} />
        <Route path="/feed" element={<News />} />
        <Route path="/sdfghjklm0987654321" element={<Login />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/airdrops/:id" element={<Airdrop />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/dashboard/:id/modify" element={<Modify />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

