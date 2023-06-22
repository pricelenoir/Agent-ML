import React from 'react';
import styles from './NFLContent.module.css';
import NFLGame from './NFLGame.js';
import NFLDate from './NFLDate';

function NFLContent() {
  return (
    <div className={styles['content-container']}>
      <NFLDate />
      <NFLGame />
    </div>
  );
}

export default NFLContent;