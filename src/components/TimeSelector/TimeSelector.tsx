import React from 'react';
import { Switch } from 'src/utils/Icons';
import { SlLocationPin } from 'react-icons/sl';
import * as S from './Styles';

function TimeSelector() {
  return (
    <S.Layout>
      <S.LeftLayout>
        <S.Title>RECORD</S.Title>
      </S.LeftLayout>
      <S.MidLayout>
        <S.TimeContainer>
          <SlLocationPin size={18} />
          <S.TimeBox />
        </S.TimeContainer>
        <Switch />
        <S.TimeContainer>
          <SlLocationPin size={18} />
          <S.TimeBox />
        </S.TimeContainer>
      </S.MidLayout>
      <S.RightLayout>
        <S.RecordIcon />
        <S.RecordText>Rec</S.RecordText>
      </S.RightLayout>
    </S.Layout>
  );
}

export default TimeSelector;
