import React from 'react';
import styles from './TopSection.module.css';

function TopSection() {
  return (
    <div className={styles.topSection}>
        <div>
            <div className={styles.header}>
                <div className={styles['header-text']}>
                    <h1>Data-Driven</h1>
                    <h1 className={styles['header-text-o']}>Predictions</h1>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles['description-text']}>
                <p>Capturing the power of extensive historical data in major sports, 
                    our cutting-edge algorithms analyze years' worth of statistical trends. 
                    Unleashing the potential of data-driven insights, we offer daily 
                    predictions for expected scores, allowing you to stay ahead of the 
                    game with accurate forecasts based on comprehensive analysis.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TopSection;
