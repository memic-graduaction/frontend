import React from 'react';
import * as S from './Styles';

function PlayerInfo() {
  return (
    <S.Layout>
      <S.StyledInfo>INFO</S.StyledInfo>
      <S.TitleLayout>
        <S.StyledTitle>Title</S.StyledTitle>
        <S.TitleContent>how programmers attend meetings at big tech companies</S.TitleContent>
      </S.TitleLayout>
      <S.StyledTag>Tag</S.StyledTag>
      <S.HashTagBox>
        <S.HashTag>#programmers</S.HashTag>
        <S.HashTag>#tech</S.HashTag>
        <S.HashTag>#programming</S.HashTag>
      </S.HashTagBox>
    </S.Layout>
  );
}

export default PlayerInfo;
