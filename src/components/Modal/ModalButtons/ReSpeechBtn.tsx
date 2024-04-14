import React from 'react';
import { Microphone } from 'src/assets/Icons';
import * as S from '../Styles';

interface Props {
  onClick: () => void;
}

function ReSpeechBtn({ onClick }: Props) {
  return (
    <S.SquareBtnBox onClick={() => onClick()}>
      <Microphone width="27px" height="27px" /> 다시 녹음하기
    </S.SquareBtnBox>
  );
}
export default ReSpeechBtn;
