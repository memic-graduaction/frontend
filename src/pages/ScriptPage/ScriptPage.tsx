import React from 'react';
import YoutubePlayer from 'src/components/YoutubePlayer/YoutubePlayer';
import TimeSelector from 'src/components/TimeSelector/TimeSelector';
import PlayerInfo from 'src/components/PlayerInfo/PlayerInfo';
import Header from '../../components/Header/Header';
import * as S from './Styles';

function ScriptPage() {
  return (
    <S.Layout>
      <Header />
      <S.Container>
        <S.TopContainer>
          <YoutubePlayer />
          <S.RightBox>
            <TimeSelector />
            <PlayerInfo />
          </S.RightBox>
        </S.TopContainer>
      </S.Container>
    </S.Layout>
  );
}

export default ScriptPage;
