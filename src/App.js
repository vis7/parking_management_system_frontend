import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import ListAndBookParking from './components/ListAndBookParking';

const App = () => {
  return (
    <BrowserRouter>
        <nav>
            <Link to='/login'>Login</Link> <br />
            <Link to='/signup'>Signup</Link> <br />
            <Link to='/list-and-book-parking'>List / Book Parking</Link> <br />
            <Link to='/logout'>logout</Link> <br />  <br /><br /><br /><br />
        </nav>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='list-and-book-parking' element={<ListAndBookParking />} />
            <Route path='/logout' element={<Logout />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
