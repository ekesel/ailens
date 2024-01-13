import React from 'react';
import { Link } from "@nextui-org/react";
import styles from '../styles/header.module.css';
import AnimatedTextCharacter from './AnimatedTextCharacter';

const Header = ({ title, phone, location }) => {
  return (
    <section className={styles.topHeader}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.rowItem}>
            <div className={styles.rowItemWrap}>
              <div className={styles.telephone}></div>
              <span className={styles.mobileText}><AnimatedTextCharacter text={phone} staggerRate={0.03} delayRate={0.04} /></span>
            </div>
          </div>
          <div className={styles.rowItem}>
            <div className={`text-center`}>
              <Link href="/" color='foreground'>
                <span className={styles.heading}><AnimatedTextCharacter text={title} staggerRate={0.1} delayRate={0.2} /></span>
              </Link>
            </div>
          </div>
          <div className={styles.rowItem}>
            <div className={styles.rowItemWrap}>
              <div className={styles.location}></div>
              <span className={styles.mobileText}><AnimatedTextCharacter text={location} staggerRate={0.2} delayRate={0.23} /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header