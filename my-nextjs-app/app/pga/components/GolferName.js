import React from 'react';
import styles from './GolferName.module.css';

/* Write functions to get golfer info, stats, headshot?, etc. */

function GolferName() {
  return (
    <div className={styles['golfer-name-container']}>
        <div className={styles['player-headshot-container']}>
          <img className={styles['player-headshot']} src="/pga/tiger-woods.png" alt="Player Headshot" />
        </div>
        <div className={styles['player-name']}>Tiger Woods</div>
        <div className={styles['player-odds-container']}>
          <div className={styles['player-odds']}></div>
          <div className={styles['player-exp-odds']}></div>
        </div>
    </div>
  );
}

export default GolferName;