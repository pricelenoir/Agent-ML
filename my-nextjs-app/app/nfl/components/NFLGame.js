import React from 'react';
import styles from './NFLGame.module.css';

// TO DO:

// Data delivered from API call in JSON format
// Write other functions to update all props: name, record, etc.

// Finish features below the divider on the NBAGame component

function NFLGame() {
  return (
    <div>
     <div className={styles['info-container']}>
        <div className={styles['game-details']}>
          <span className={styles['location-time-container']}>
            <span className={styles.time}>1:00 p.m. EST</span>
            <span className={styles.location}>Los Angeles, CA</span>
          </span>
        </div>

        <div className={styles['game-analytic-labels']}>
          <span className={styles['spread-label']}>Spread</span>
          <span className={styles['expected-score-label']}>Predicted <br></br> Score</span>
          <span className={styles['score-label']}>Score</span>
        </div>

      </div>

      <div className={styles['game-container']}>

        <div className={styles['team-info']}>
          <img className={styles['team-logo']} src="/nfl/logos/den.png" alt="Team Logo" />
          <span className={styles['team-name']}>Broncos</span>
          <span className={styles['team-record']}>0-17</span>
          <div className={styles['box-container']}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
          </div>
        </div>


        <div className={styles['team-info']}>
          <img className={styles['team-logo']} src="/nfl/logos/lac.png" alt="Team Logo" />
          <span className={styles['team-name']}>Chargers</span>
          <span className={styles['team-record']}>17-0</span>
          <div className={styles['box-container']}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
          </div>
        </div>

        <div className={styles['over-under']}>O/U: 54.5</div>
        
        <div className={styles.divider}></div>

      </div>
    </div>
  );
}

export default NFLGame;