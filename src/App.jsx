import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Services from './components/Services';
import Ugc from './components/Ugc';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoNotification from './components/VideoNotification';

function App() {
  return (
    <div className="app">
      {/* Global Decorative EB Watermark */}
      <div style={{
        position: 'fixed',
        top: 0, bottom: 0, left: 0, right: 0,
        zIndex: -1, /* Behind everything */
        pointerEvents: 'none',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: '0%', // Slightly off-screen like before
        overflow: 'hidden'
      }}>
        <div style={{
          fontSize: 'clamp(20rem, 40vw, 50rem)',
          fontFamily: '"Playfair Display", serif',
          fontWeight: 700,
          color: 'transparent',
          WebkitTextStroke: '2px rgba(17, 17, 17, 0.08)',
          lineHeight: 1,
          letterSpacing: '-15px',
          display: 'flex',
          alignItems: 'center',
          transform: 'translateX(5%)' // Push it to the right edge
        }}>
          <span style={{ transform: 'translateY(-25%)' }}>E</span>
          <span style={{ transform: 'translateY(25%)' }}>B</span>
        </div>
      </div>

      <Navbar />
      <Hero />
      <Banner />
      <Services />
      <Ugc />
      <Contact />
      <Footer />
      <VideoNotification />
    </div>
  );
}

export default App;
