import React from 'react';
import { Stop } from 'src/utils/Icons';
import * as S from '../Styles';

interface Props {
  onClick: () => void;
}

function StopSpeechBtn({ onClick }: Props) {
  return (
    <S.RoundBtn onClick={() => onClick()}>
      <Stop />
    </S.RoundBtn>
  );
}

export default StopSpeechBtn;
