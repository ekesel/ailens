import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';
import AnimatedTextCharacter from './AnimatedTextCharacter';

const Header = ({ title, phone, location, socialMedia }) => {
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
            <div>
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
        <div className={styles.iconRow}>
          <div className={styles.iconRowItem}>
            <div className={styles.rowItemWrap}>
              <Link href={socialMedia?.linkedIn}><div className={styles.linkedIn}></div>
              </Link>
            </div>
          </div>
          <div className={styles.iconRowItem}>
            <div className={styles.rowItemWrap}>
              <Link href={socialMedia?.twitter}><div className={styles.twitter}></div>
              </Link>
            </div>
          </div>
          <div className={styles.iconRowItem}>
            <div className={styles.rowItemWrap}>
              <Link href={socialMedia?.facebook}><div className={styles.facebook}></div>
              </Link>
            </div>
          </div>
          <div className={styles.iconRowItem}>
            <div className={styles.rowItemWrap}>
              <Link href={socialMedia?.instagram}><div className={styles.instagram}></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header