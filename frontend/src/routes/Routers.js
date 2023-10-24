import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Contact from '../pages/contact/Contact';
import Home from '../pages/homePage/Home';
import Login from '../pages/login/login.jsx';
import Register from '../pages/register/register.jsx'
import Dashboard from '../pages/dashboard/Dashboard.jsx'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} /> 
        <Route path='/home' element={ <Home/> } />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
   </Routes>
  );
}

export default Routers;