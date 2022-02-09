import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Review from './routes/Review'
import Database from './routes/Database'
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/review" element={<Review />} />
          <Route path="/database" element={<Database />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
