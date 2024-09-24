import React from 'react';
import { Microphone } from 'src/assets/Icons';
import * as S from '../Styles';

interface Props {
  onClick: () => void;
}

function ReSpeechBtn({ onClick }: Props) {
  return (
    <S.ResultBtnBox onClick={() => onClick()}>
      다시 녹음하기
      <Microphone width="20" />
    </S.ResultBtnBox>
  );
}
export default ReSpeechBtn;
