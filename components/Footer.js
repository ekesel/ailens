import React from 'react';
import styles from '../styles/footer.module.css';
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.waves}>
                <div className={styles.wave1}></div>
                <div className={styles.wave2}></div>
                <div className={styles.wave3}></div>
                <div className={styles.wave4}></div>
            </div>
            <ul className={styles.menu}>
                <li className={styles.menu__item}><Link className={styles.menu__link} href="/">Home</Link></li>
                <li className={styles.menu__item}><Link className={styles.menu__link} href="#">About</Link></li>
                <li className={styles.menu__item}>
                    <Link className={styles.menu__link} href="#products" scroll={false}>Products</Link></li>
                <li className={styles.menu__item}><Link className={styles.menu__link} href="#">Contact</Link></li>

            </ul>
            <p className={styles.copyright}>&copy;2024 AI Lens | All Rights Reserved</p>
            <p className={styles.credits}>Site Developed By <Link href={'https://www.linkedin.com/in/ekesel/'}>@ekesel</Link></p>
        </footer>
    )
}

export default Footer