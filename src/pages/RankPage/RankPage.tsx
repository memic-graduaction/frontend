import React from 'react';
import Header from '../../components/Header/Header';
import * as S from './Styles';

function RankPage() {
  return (
    <div id="rankPage">
      <S.Layout>
        <Header />
        <S.Container>
          <S.Title>오늘은 이런 영상 어때요?</S.Title>
          <S.ThumbnailBox>
            <S.Thumbnail href="https://www.youtube.com/watch?v=rR4n-0KYeKQ" />
            <S.Thumbnail href="https://www.youtube.com/watch?v=rR4n-0KYeKQ" />
            <S.Thumbnail href="https://www.youtube.com/watch?v=rR4n-0KYeKQ" />
          </S.ThumbnailBox>
        </S.Container>
      </S.Layout>
    </div>
  );
}

export default RankPage;
