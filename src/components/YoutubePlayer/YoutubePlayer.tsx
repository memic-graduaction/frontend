import React from 'react';
import ReactPlayer from 'react-player';
import { useRecoilValue } from 'recoil';
import { youtubeLinkState } from 'src/recoil/states';

function YoutubePlayer() {
  const url = useRecoilValue(youtubeLinkState);
  return <ReactPlayer url={url} playing controls width="100%" height="62%" />;
}

export default YoutubePlayer;
