import React from 'react'
import styles from '../styles/card.module.css';

const TextCard = (props) => {
  return (
    <div className={props?.position == 'right' ? styles.rightTextCardContainer : styles.leftTextCardContainer}>
        <span className={styles.title}>{props?.textCardTitle}</span>
        <p className={styles.description}>{props?.textCardp1}</p>
        {props?.textCardp2 &&<p className={styles.description}>{props?.textCardp2}</p>}
        {props?.textCardp3 && <p className={styles.description}>{props?.textCardp3}</p>}
    </div>
  )
}

export default TextCard