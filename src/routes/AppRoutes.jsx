import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics, Fitness, Profile, Statistics } from '../constant';
import Nav from '../components/common/Nav';

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Fitness />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;