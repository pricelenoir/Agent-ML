import React from 'react';
import './globals.css';
import './home.css'
import TopSection from './components/TopSection';
import MiddleSection from './components/MiddleSection';
import Stats from './components/Stats';
import BottomSection from './components/BottomSection';

function Home() {
  return (
    <div className="home-content">
      <TopSection />
      <Stats />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}

export default Home;