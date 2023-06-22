import React from 'react';
import styles from './NBAContent.module.css';
import NBAGame from './NBAGame.js';
import NBADate from './NBADate';
// import Grid from @material-ui
// Grid from material-ui website to insert a grid of Game comps.
// For loop with keys
// https://mui.com/material-ui/react-grid/

function NBAContent() {
  return (
    <div className={styles['content-container']}>
      <NBADate />
      <NBAGame />
      <NBADate />
      <NBAGame />
    </div>
  );
}

export default NBAContent;