import React from 'react';
import './nba.css';
import NBAHeader from './components/NBAHeader.js';
import NBAContent from './components/NBAContent.js';

// Write loop to render in varying numbers of games depending on weekly schedules
// Create custom header for NBA Page
  // Animated pixal art ??
// Conditional rendering: If there's no games, render a come back later page

const NBAPage = () => {
  return(
    <div className="nba-content">
      <NBAHeader/>
      <NBAContent />
    </div>
  )
};

export default NBAPage;