import React from 'react';
import './App.css';
import Contacts from './Contacts';
import About from './About';
import News from './News';
import Products from './Products';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import image1 from './image1.jpg'; // Import the image


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><i class="fa-solid fa-city"></i> Urban Guide</h1>
      </header>
      <Router>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/products">Products/Services</Link> |
          <Link to="/news">News</Link> |
          <Link to="/contacts">Contacts</Link>
        </nav>
        <Routes>
      
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
      
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to UrbanGuide, your guide to the urban lifestyle!</p>
      </section>

      <div>
      <img src={image1} alt="Example" style={{ width: '100%', height: '400px' }} />
      </div>


    </div>
  );
}

export default App;