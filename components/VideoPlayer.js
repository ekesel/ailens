import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videosrc }) => {

    return (
        <div>
            <ReactPlayer
                width={'22rem'}
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