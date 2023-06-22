import React from 'react';
import './nfl.css';
import NFLHeader from './components/NFLHeader.js';
import NFLContent from './components/NFLContent.js';

const NFLPage = () => {
  return(
    <div className="nfl-content">
      <NFLHeader/>
      <NFLContent />
    </div>
  )
};

export default NFLPage;