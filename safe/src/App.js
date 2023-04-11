import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Home Pages
import Home from './pages/home/Home';
import FeaturedJobs from './pages/home/components/FeaturedJobs';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path='/' element={<Home />} />
          <Route exact={true} path='/featuredjobs' element={<FeaturedJobs />} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App;
