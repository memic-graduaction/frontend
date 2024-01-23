import React from 'react';
import Script from 'src/components/Script/Script';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { scriptExpendState } from 'src/recoil/states';
import * as S from '../../pages/ScriptPage/Styles';
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';

function ScriptExpanded() {
  const setIsExpanded: SetterOrUpdater<boolean> = useSetRecoilState<boolean>(scriptExpendState);
  const handleClick = () => {
    setIsExpanded(false);
  };
  return (
    <S.Container>
      <S.ButtonContainer style={{ alignItems: 'flex-end' }}>
        <S.ScriptBig>Script</S.ScriptBig>
        <S.DownLoadBtn onClick={handleClick}>축소</S.DownLoadBtn>
      </S.ButtonContainer>
      <Script />
      <S.PlayerContainer>
        <YoutubePlayer />
      </S.PlayerContainer>
    </S.Container>
  );
}

export default ScriptExpanded;
