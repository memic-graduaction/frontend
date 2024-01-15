import React from 'react';
import * as S from './Styles';

function PlayerInfo() {
  return (
    <S.Layout>
      <S.StyledInfo>INFO</S.StyledInfo>
      <S.TitleLayout>
        <S.StyledTitle>Title</S.StyledTitle>
        <S.TitleContent>Emma Watson Once Mistook Jimmy Fallon for Jimmy Kimmel</S.TitleContent>
      </S.TitleLayout>
      <S.StyledTag>Tag</S.StyledTag>
      <S.HashTagBox>
        <S.HashTag>#EmmaWatson</S.HashTag>
        <S.HashTag>#News</S.HashTag>
        <S.HashTag>#Daily</S.HashTag>
        <S.HashTag>#Mistake</S.HashTag>
        <S.PlusBtn>+</S.PlusBtn>
      </S.HashTagBox>
    </S.Layout>
  );
}

export default PlayerInfo;
