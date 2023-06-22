import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href="/">
            <img className={styles['home-logo']} src="/icons/home.png" alt="Home Logo" />
            </Link>
          </li>
          <li>
            <Link href="/nba">
              <img className={styles['basketball-logo']} src="/icons/basketball.png" alt="Basketball Logo" />
            </Link>
          </li>
          <li>
            <Link href="/nfl">
            <img className={styles['football-logo']} src="/icons/football.png" alt="Football Logo" />
            </Link>
          </li>
          <li>
            <Link href="/pga">
            <img className={styles['golf-logo']} src="/icons/golf.png" alt="Golf Logo" />
            </Link>
          </li>
          <li>
            <Link href="/data">
            <img className={styles['data-logo']} src="/icons/data.png" alt="Data Logo" />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;