import React from 'react';
import styles from './NFLDate.module.css';

function NFLDate() {
  return (
    <div className={styles['date-container']}>
      <h1 className = {styles['date-text']}>
        April 23, 2023
      </h1>
      <div className={styles.divider}></div>
    </div>
  );
}

export default NFLDate;