import React from 'react';
import { PlayBtn } from 'src/utils/Icons';
import * as S from './Styles';

interface Props {
  onClick: () => void;
}

function PlaySpeechBtn({ onClick }: Props) {
  return (
    <S.SquareBtnBox onClick={() => onClick()}>
      <PlayBtn />
      나의 발음 듣기
    </S.SquareBtnBox>
  );
}

export default PlaySpeechBtn;
