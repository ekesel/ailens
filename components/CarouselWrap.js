import React, { useState } from 'react';
import styles from '../styles/carousel.module.css';
import Carousel from 'react-material-ui-carousel';
import { Image } from "@nextui-org/react";

import one from '../images/slider-1.jpg';
import two from '../images/slider-2.jpg';
import three from '../images/slider-3.jpg';

const CarouselWrap = () => {
    const [currentImage, setCurrentImage] = useState(0)

    const carouselImages = [
        one?.src,
        two?.src,
        three?.src
    ];

    const moveCarousel = (direction) => {
        if (direction == 'next') {
            if (currentImage < carouselImages.length - 1)
                setCurrentImage(currentImage + 1)
            else
                setCurrentImage(0)
        }
        else {
            if (currentImage > 0)
                setCurrentImage(currentImage - 1)
            else
                setCurrentImage(carouselImages.length - 1)
        }
    }

    return (
        <div className={styles.wrap}>
            <Carousel
                fullHeightHover={false}
                next={() => moveCarousel('next')}
                prev={() => moveCarousel('prev')}
                animation={'slide'}
                navButtonsAlwaysVisible={true}
            >
                <div className={styles.container}>
                    <div className={styles.tag}>
                        <span className={styles.tagText}>AI-enabled Work Place Safety</span>
                        <span className={styles.tagSubText}>Empowering Tomorrow with AI Today.</span>
                    </div>
                    <img src={carouselImages[currentImage]} className={styles.image} />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselWrap;