'use client';
import React from 'react';
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

function Header() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles['left-container']}>
        <div className={styles['rectangle-toggle']}>
          {/* Left container content */}
          <img className={styles['toggle-logo']}
            src="/icons/toggle.png"
            alt="Toggle Sidebar"
            onClick={handleSidebarToggle}
          />
        </div>
        <div className={styles['rectangle-logo']}>
          <h1 className={styles.title} style={{ fontFamily: 'Roboto, sans-serif' }}>AGENT ML</h1>
        </div>
        <div className={styles['triangle-container']}>
          <div className={styles['triangle-layer-1']}></div>
          <div className={styles['triangle-layer-2']}></div>
          <div className={styles['rectangle-fill']}></div>
        </div>
      </div>
      <div className={styles['right-container']}>
      <div className={styles['triangle-container']}>
          <div className={styles['triangle-layer-1-l']}></div>
          <div className={styles['triangle-layer-2-l']}></div>
          <div className={styles['rectangle-fill-l']}></div>
        </div>

        <div className={styles['rectangle-logo-right']}>
          {/* Right container content */}
          <Link href="mailto:email@gmail.com">
            <img className={styles['header-logos']} src="/icons/email.png" alt="Email Logo" />
          </Link>

          <Link href="https://github.com/pricelenoir?tab=repositories">
            <img className={styles['header-logos']} src="/icons/github.png" alt="GitHub Logo" />
          </Link>

          <Link href="https://www.linkedin.com/in/price-lenoir/">
            <img className={styles['header-logos']} src="/icons/linkedin.png" alt="LinkedIn Logo" />
          </Link>
        </div>

        <div className={styles['triangle-container']}>
          <div className={styles['triangle-layer-1']}></div>
          <div className={styles['triangle-layer-2']}></div>
          <div className={styles['rectangle-fill']}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;