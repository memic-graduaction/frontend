import React from 'react';
import { Microphone } from 'src/assets/Icons';
import * as S from '../Styles';

interface Props {
  onClick: () => void;
}

function SpeechBtn({ onClick }: Props) {
  return (
    <S.RoundBtn onClick={() => onClick()}>
      <Microphone />
    </S.RoundBtn>
  );
}

export default SpeechBtn;
