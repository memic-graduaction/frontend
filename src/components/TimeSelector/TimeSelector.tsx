import React from 'react';
import { Record, Switch } from 'src/utils/Icons';
import { SlLocationPin } from 'react-icons/sl';
import * as S from './Styles';

function TimeSelector() {
  return (
    <S.Layout>
      <S.LeftLayout>
        <S.Title>RECORD</S.Title>
        <Record />
      </S.LeftLayout>
      <S.MidLayout>
        <S.TimeContainer>
          <SlLocationPin size={20} />
          <S.TimeBox />
        </S.TimeContainer>
        <S.TimeContainer>
          <SlLocationPin size={20} />
          <S.TimeBox />
        </S.TimeContainer>
      </S.MidLayout>
      <S.RightLayout>
        <Switch />
      </S.RightLayout>
    </S.Layout>
  );
}

export default TimeSelector;
