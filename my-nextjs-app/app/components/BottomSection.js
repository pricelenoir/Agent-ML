import React from 'react';
import styles from './BottomSection.module.css';

function BottomSection() {
  return (
    <div className={styles.bottomSection}>
      <div className={styles['left-container']}></div>
      <div className={styles['right-container']}></div>
    </div>
  );
}

export default BottomSection;