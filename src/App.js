import './App.css';
import Navigation from './PortfolioContainer/Navigation/Navigation';
import Profile from './PortfolioContainer/Home/Profile';
import About from './PortfolioContainer/About/About';
import Background from './PortfolioContainer/Background/Background';
import Contact from './PortfolioContainer/Contact/Contact';
import ScrollToTopButton from './PortfolioContainer/ScrollToTopButton';
import Footer from './PortfolioContainer/Footer/Footer'
import React from 'react';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Profile />
        <About />
        <Background />
        <Contact />
        <Footer />
        <ScrollToTopButton />
    </div>
  );
}
export default App;
