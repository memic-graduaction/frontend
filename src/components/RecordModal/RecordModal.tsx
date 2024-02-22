import React from 'react';
import { Close } from 'src/utils/Icons';
import { MoonLoader } from 'react-spinners';
import * as S from './Styles';

function RecordModal() {
  return (
    <S.Layout>
      <S.IconBox>
        <Close height={`${2}rem`} width={`${2}rem}`} />
      </S.IconBox>
      <MoonLoader color="#D443E0" />

      <S.TextBlack>발음 분석 중</S.TextBlack>
    </S.Layout>
  );
}

export default RecordModal;
