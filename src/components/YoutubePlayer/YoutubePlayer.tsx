import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalActivationState, youtubeLinkState, youtubePlayerState, currentTimeState } from 'src/recoil/states';

function YoutubePlayer() {
  const playerRef = useRef(null);
  const [, setCurrentTime] = useRecoilState(currentTimeState);

  const isModalOpen = useRecoilValue(modalActivationState);
  const { startPoint } = useRecoilValue(youtubePlayerState); 

  const handleProgress = ({ playedSeconds }: { playedSeconds: number }) => {
    setCurrentTime(formatTime(Math.round(playedSeconds)));
  };
  
  useEffect(() => {
    seekTo(convertToSeconds(startPoint));
  }, [startPoint]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
  
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };
  
  // 현재 시간을 정수로 반올림하여 문자열로 변환하여 저장
  const seekTo = (seconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds, 'seconds');
      const current = Math.round(playerRef.current.getCurrentTime());
      setCurrentTime(formatTime(current));
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

  return (
    <ReactPlayer 
      className="video" 
      ref={playerRef} 
      url={useRecoilValue(youtubeLinkState)} 
      playing={!isModalOpen} 
      controls 
      width="100%" 
      height="62%" 
      onProgress={handleProgress}
    />
  );
}

export default YoutubePlayer;
