import React, { useEffect, useState } from "react";
import styles from '../styles/card.module.css';
import MediaCard from './MediaCard';
import TextCard from "./TextCard";

const CardSet = ({mediaType}) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {domLoaded && <MediaCard type={mediaType} />}
      </div>
      <div className={styles.right} >
        <TextCard position={'right'} />
      </div>
    </div>
  )
}

export default CardSet