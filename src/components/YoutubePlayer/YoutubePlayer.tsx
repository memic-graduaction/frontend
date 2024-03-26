import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useRecoilValue } from 'recoil';
import { modalActivationState, youtubeLinkState, youtubePlayerState } from 'src/recoil/states';

function YoutubePlayer() {
  const playerRef = useRef(null);
  const isModalOpen = useRecoilValue(modalActivationState);
  const { startPoint } = useRecoilValue(youtubePlayerState); 

  useEffect(() => {
    seekTo(convertToSeconds(startPoint));
  }, [startPoint]);

  const seekTo = (seconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds, 'seconds');
    }
  };

  const convertToSeconds = (time: string): number => {
    const parts = time.split(':');
  
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  const seconds = parseInt(parts[2], 10);
  
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return totalSeconds;
  };

  if (isModalOpen) {
    const video = document.querySelector('iframe');
    video.setAttribute('autoplay', 'false');
  }
  const url = useRecoilValue(youtubeLinkState);
  return (
      <ReactPlayer 
        className="video" 
        ref={playerRef} 
        url={url} 
        playing={!isModalOpen} 
        controls 
        width="100%" 
        height="62%" 
      />
  );
}

export default YoutubePlayer;
