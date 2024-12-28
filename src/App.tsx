import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page404 from './components/Page404';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}