import React from 'react';
import YoutubePlayer from 'src/components/YoutubePlayer/YoutubePlayer';
import TimeSelector from 'src/components/TimeSelector/TimeSelector';
import PlayerInfo from 'src/components/PlayerInfo/PlayerInfo';
import Script from 'src/components/Script/Script';
import { BookMark } from 'src/utils/Icons';
import { useRecoilState } from 'recoil';
import { scriptExpendState } from 'src/recoil/states';
import ScriptExpanded from 'src/components/Script/ScriptExpanded';
import Header from '../../components/Header/Header';
import * as S from './Styles';

function ScriptPage() {
  const [isExpanded, setIsExpanded] = useRecoilState(scriptExpendState);
  const handleClick = () => {
    setIsExpanded(true);
  };
  return (
    <S.Layout>
      <Header />
      {isExpanded ? (
        <ScriptExpanded />
      ) : (
        <S.Container>
          <S.TopContainer>
            <YoutubePlayer />
            <S.RightBox>
              <TimeSelector />
              <PlayerInfo />
            </S.RightBox>
          </S.TopContainer>
          <S.BtmContainer>
            <S.ButtonContainer style={{ justifyContent: 'flex-start' }}>
              <BookMark />
              <S.StyledScrap>Scrap</S.StyledScrap>
            </S.ButtonContainer>
            <S.Border />
            <S.ButtonContainer>
              <S.ScriptSmall>Script</S.ScriptSmall>
              <S.DownLoadBtn>Download</S.DownLoadBtn>
            </S.ButtonContainer>
            <Script />
            <S.ButtonContainer style={{ justifyContent: 'flex-end', marginTop: '1rem' }}>
              <S.DownLoadBtn onClick={handleClick}>더 보기</S.DownLoadBtn>
            </S.ButtonContainer>
          </S.BtmContainer>
        </S.Container>
      )}
    </S.Layout>
  );
}

export default ScriptPage;
