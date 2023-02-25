import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {EmptyPage, AllSongs} from './pages';
import './constants/variable.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllSongs/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;