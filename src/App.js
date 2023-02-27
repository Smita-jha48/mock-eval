import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {EmptyPage, AllSongs, Error, PageNotFound} from './pages';
import './constants/variable.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmptyPage />} />
        <Route path='/songs' element={<AllSongs />} />
        <Route path="/error/:errorCode" element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;