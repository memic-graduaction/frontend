import React from 'react';
import YoutubePlayer from 'src/components/YoutubePlayer/YoutubePlayer';
import TimeSelector from 'src/components/TimeSelector/TimeSelector';
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
          <S.RightBox>
            <TimeSelector />
          </S.RightBox>
          <S.BtmContainer>
            <Script />
          </S.BtmContainer>
        </S.SubContainer>
      </S.MainLayout>
    </S.Layout>
  );
}

export default ScriptPage;
