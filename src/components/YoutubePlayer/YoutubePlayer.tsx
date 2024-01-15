import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import * as S from './Styles';

function YoutubePlayer() {
  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: { autoplay: 1 },
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  return (
    <S.Layout>
      <YouTube className="player" videoId="xgs5gOCpsAE" opts={opts} onReady={onPlayerReady} />
    </S.Layout>
  );
}

export default YoutubePlayer;
