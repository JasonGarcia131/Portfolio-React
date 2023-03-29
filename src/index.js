import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/About';
import Resume from './pages/Resume';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/AboutMe" element={<About />} />
        <Route path='/Resume' element={<Resume/>}/>
      </Routes>
    </Router>
  </React.StrictMode>

);
