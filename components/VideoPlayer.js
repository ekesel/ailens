import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videosrc }) => {
    const [isTabView, setIsTabView] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-device-width: 768px)')
        if (mediaQuery.matches) {
            setIsTabView(true)
        }
        else
            setIsTabView(false)
      }, [])

    return (
        <div>
            <ReactPlayer
                width={isTabView ? '15rem' : '22rem'}
                height={'400px'}
                url={videosrc}
                controls={false}
                light={false}
                loop
                muted
                playsInline
                playing
            />
            <source src={videosrc} type="video/mp4" />
        </div>
    );
};

export default VideoPlayer;