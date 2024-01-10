import React from 'react'
import styles from '../styles/subHeading.module.css'

const SubHeading = () => {
  return (
    <div className={styles.container}>
        <span className={styles.title}>OUR PRODUCTS</span>
        <span className={styles.subtitle}>Elevate your AI experience: explore our suite of virtual solutions.</span>
    </div>
  )
}

export default SubHeading