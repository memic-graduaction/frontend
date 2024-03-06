import React from 'react';
import { BookMark } from 'src/utils/Icons';
import * as S from './Styles';

function PlayerInfo() {
  return (
    <S.Layout>
      <S.TitleLayout>
        <S.TitleContent>How programmers attend meetings at big tech companies</S.TitleContent>
        <S.ButtonContainer>
          <BookMark />
        </S.ButtonContainer>
      </S.TitleLayout>
      <S.Border />
      <S.StyledTag>Tags</S.StyledTag>
      <S.HashTagBox>
        <S.HashTag>#programmers</S.HashTag>
        <S.HashTag>#tech</S.HashTag>
        <S.HashTag>#programming</S.HashTag>
        <S.PlusBtn>+</S.PlusBtn>
      </S.HashTagBox>
    </S.Layout>
  );
}

export default PlayerInfo;
