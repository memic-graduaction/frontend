import React from 'react';
import Header from '../../components/Header/Header';
import * as S from './Styles';
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png';

function RankPage() {

  return (
    <div id="rankPage">
      <S.Layout>
        <Header />
        <S.Title>
          오늘의 추천 동영상
        </S.Title>
        <S.Container>
          <S.Preview src={pic1} alt="Image 1" />
          <S.Preview src={pic2} alt="Image 2" />
          <S.Preview src={pic3} alt="Image 3" />
        </S.Container>
      </S.Layout>
    </div>
  );
}

export default RankPage;
