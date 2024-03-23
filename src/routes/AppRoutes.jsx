import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fitness from '../pages/Fitness';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Fitness />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;