import React from 'react';
import styles from './NBAGame.module.css';

// TO DO:

// Data delivered from API call in JSON format
// Write other functions to update all props:
// team names, logos, records, time, location, spread, p-score, o/u, score

// Finish features below the divider on the NBAGame component

function NBAGame() {
  return (
    <div>
      <div className={styles['info-container']}>
        <div className={styles['game-details']}>
          <span className={styles['location-time-container']}>
            <span className={styles.time}>10:30 p.m. EST</span>
            <span className={styles.location}>San Francisco, CA</span>
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
          <img className={styles['team-logo']} src="/nba/logos/was.png" alt="Team Logo" />
          <span className={styles['team-name']}>Wizards</span>
          <span className={styles['team-record']}>0-82</span>
          <div className={styles['box-container']}>
            <div className={styles.box}>
              <h1 className = {styles.spread}>+16.5</h1>
            </div>
            <div className={styles.box}>
              <h1 className = {styles['predicted-score']}>92</h1>
            </div>
            <div className={styles.box}>
              <h1 className = {styles.score}>81</h1>
            </div>
          </div>
        </div>


        <div className={styles['team-info']}>
          <img className={styles['team-logo']} src="/nba/logos/gsw.png" alt="Team Logo" />
          <span className={styles['team-name']}>Warriors</span>
          <span className={styles['team-record']}>82-0</span>
          <div className={styles['box-container']}>
            <div className={styles.box}>
              <h1 className = {styles.spread}>-16.5</h1>
            </div>
            <div className={styles.box}>
              <h1 className = {styles['predicted-score']}>108</h1>
            </div>
            <div className={styles.box}>
              <h1 className = {styles.score}>120</h1>
            </div>
          </div>
        </div>

        <div className={styles['over-under']}>O/U: 201.5</div>

        <div className={styles.divider}></div>

      </div>
    </div>
  );
}

export default NBAGame;