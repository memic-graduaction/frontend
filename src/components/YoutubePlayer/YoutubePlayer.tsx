import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useRecoilValue } from 'recoil';
import { youtubeLinkState } from 'src/recoil/states';
import * as S from './Styles';

function YoutubePlayer() {
  const link = useRecoilValue(youtubeLinkState);
  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      rel: 0,
      modestbranding: 1,
      loop: 1,
    },
  };

  const onPlay: YouTubeProps['onPlay'] = (event) => {
    event.target.playVideo();
  };

  return (
    <S.Layout>
      <YouTube className="player" videoId={link} opts={opts} onReady={onPlay} />
    </S.Layout>
  );
}

export default YoutubePlayer;
