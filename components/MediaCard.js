import React from 'react';
import styles from '../styles/card.module.css';
import VideoPlayer from './VideoPlayer';

const MediaCard = ({ type }) => {
  return (
    <div className={styles.leftCard} >
        {type == 'video' && <div className={styles.mediaWrap}>
            <VideoPlayer videosrc={'/videos/card1.mp4'} />
        </div>}
    </div>
  )
}

export default MediaCard