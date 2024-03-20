import React from 'react';
import YoutubePlayer from 'src/components/YoutubePlayer/YoutubePlayer';
import PlayerInfo from 'src/components/PlayerInfo/PlayerInfo';
import Script from 'src/components/Script/Script';
import Header from '../../components/Header/Header';
import * as S from './Styles';

function ScriptPage() {
  return (
    <S.Layout>
      <Header />
      <S.MainLayout>
        <S.MainContainer>
          <YoutubePlayer />
          <PlayerInfo />
        </S.MainContainer>
        <S.SubContainer>
          <Script />
        </S.SubContainer>
      </S.MainLayout>
    </S.Layout>
  );
}

export default ScriptPage;
