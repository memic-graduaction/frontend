import React from 'react';
import ReactPlayer from 'react-player';
import { useRecoilValue } from 'recoil';
import { modalActivationState, youtubeLinkState } from 'src/recoil/states';

function YoutubePlayer() {
  const isModalOpen = useRecoilValue(modalActivationState);
  if (isModalOpen) {
    const video = document.querySelector('iframe');
    video.setAttribute('autoplay', 'false');
  }
  const url = useRecoilValue(youtubeLinkState);
  return <ReactPlayer className="video" url={url} playing={!isModalOpen} controls width="100%" height="62%" />;
}

export default YoutubePlayer;
