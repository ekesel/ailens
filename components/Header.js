import React from 'react';
import { Link } from "@nextui-org/react";
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <section className={styles.topHeader}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.rowItem}>
            <div className={styles.rowItemWrap}>
              <div className={styles.telephone}></div>
              <span>0129- 12323-123123</span>
            </div>
          </div>
          <div className={styles.rowItem}>
            <div className={`text-center`}>
              <Link href="/index" color='foreground'>
                <span className={styles.heading}>AI LENS</span>
              </Link>
            </div>
          </div>
          <div className={styles.rowItem}>
            <div className={styles.rowItemWrap}>
              <div className={styles.search}></div>
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header