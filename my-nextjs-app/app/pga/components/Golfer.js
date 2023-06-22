import React from 'react';
import styles from './Golfer.module.css';
import GolferName from './GolferName';

/* Write functions to get golfer info, stats, headshot?, etc. */

function Golfer() {
  return (
    <div className={styles.container}>

      <div className={styles['label-container']}>
        <div className={styles['label-odds']}>Odds</div>
        <div className={styles['label-exp-odds']}>Expected<br></br>Odds</div>
      </div>

      <div className={styles['golfer-container']}>
        <div className="collapse collapse-plus bg-white rounded-none shadow-xl">
          <input type="checkbox" className="peer" /> 
          <div className="collapse-title bg-white text-black [input:checked~&]:bg-grey-2 [input:checked~&]:text-secondary-content">
            <div className='card w-96'>
              <GolferName />
            </div>
          </div>
          <div className="collapse-content bg-white text-primary-content [input:checked~&]:bg-grey-2 [input:checked~&]:text-secondary-content">
            <div className={styles['stat-container']}>
              <div className="lg:tooltip" data-tip="FedEx Ranking">
                <button className="btn bg-white text-black border-grey-1 rounded-none hover:bg-grey-1">FedEx: </button>
              </div>

              <div className="lg:tooltip" data-tip="Official World Golf Ranking">
                <button className="btn bg-white text-black border-grey-1 rounded-none hover:bg-grey-1">OWGR: </button>
              </div>

              <div className="lg:tooltip" data-tip="Strokes Gained">
                <button className="btn bg-white text-black border-grey-1 rounded-none hover:bg-grey-1">SG: </button>
              </div>

              <div className="lg:tooltip" data-tip="SG: Off-the-Tee">
                <button className="btn bg-white text-black border-grey-1 rounded-none hover:bg-grey-1">OTT: </button>
              </div>

              <div className="lg:tooltip" data-tip="SG: Approach-the-Green">
                <button className="btn bg-white text-black border-grey-1 rounded-none hover:bg-grey-1">APP: </button>
              </div>

              <div className="lg:tooltip" data-tip="SG: Putting">
                <button className="btn bg-white text-black border-grey-1 rounded-none hover:bg-grey-1">Putting: </button>
              </div>
            </div> 
          </div>
        </div>
      </div>

    </div>
  );
}

export default Golfer;