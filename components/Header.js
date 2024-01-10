import React from 'react';
import { Link } from "@nextui-org/react";
import styles from '../styles/header.module.css';
import AnimatedTextCharacter from './AnimatedTextCharacter';

const Header = () => {
  return (
    <section className={styles.topHeader}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.rowItem}>
            <div className={styles.rowItemWrap}>
              <div className={styles.telephone}></div>
              <span><AnimatedTextCharacter text="0129- 12323-123123" staggerRate={0.03} delayRate={0.04} /></span>
            </div>
          </div>
          <div className={styles.rowItem}>
            <div className={`text-center`}>
              <Link href="/index" color='foreground'>
                <span className={styles.heading}><AnimatedTextCharacter text="AI LENS" staggerRate={0.1} delayRate={0.2} /></span>
              </Link>
            </div>
          </div>
          <div className={styles.rowItem}>
            <div className={styles.rowItemWrap}>
              <div className={styles.search}></div>
              <span><AnimatedTextCharacter text="Search" staggerRate={0.2} delayRate={0.23} /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header