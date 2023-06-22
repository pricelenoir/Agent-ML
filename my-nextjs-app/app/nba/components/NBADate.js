import React from 'react';
import styles from './NBADate.module.css';

function NBADate() {
  return (
    <div className={styles['date-container']}>
      <h1 className = {styles['date-text']}>
        April 23, 2023 {/* Get date function */}
      </h1>
      <div className={styles.divider}></div>
    </div>
  );
}

export default NBADate;