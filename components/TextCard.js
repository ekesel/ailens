import React from 'react'
import styles from '../styles/card.module.css';

const TextCard = ({position}) => {
  return (
    <div className={position == 'right' ? styles.rightTextCardContainer : ''}>
        <span className={styles.title}>PPE Detection</span>
        <p className={styles.description}>AI-Lens uses advanced computer vision techniques for real time monitoring of PPE kit detection. 
            It enhances workplace safety by automating the identification of 
            correct gear usage and ensuring compliance, reducing the risk of accidents and injuries.</p>
        <p className={styles.description}> Detect usage of Personal Fall Arrest System is used (PFAS) like a 
        full body harness for wok-sites that are situated at heights along with other anti-fall protective gear. </p>
        <p  className={styles.description}>The compliance of head-mounted industrial PPE by using deep learning object detectors</p>
    </div>
  )
}

export default TextCard