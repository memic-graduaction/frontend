import React from 'react';
import { Close } from 'src/assets/Icons';
import * as S from './Styles';

interface Props {
  phrase: string;
  hashTags?: string[];
}

const PhraseEditCard = ({ phrase, hashTags }: Props) => (
  <S.Layout>
    <S.IconBox>
      <Close width={15} height={15} />
    </S.IconBox>
    <S.PhraseBox>{phrase}</S.PhraseBox>
    <input placeholder="뜻을 입력하세요" />
    <S.HashTagBox>
      {hashTags ? hashTags.map((v) => <S.HashTag>#{v}</S.HashTag>) : <S.HashTag>+</S.HashTag>}
    </S.HashTagBox>
    <S.ButtonBox>
      <S.SubmitBtn>취소</S.SubmitBtn>
      <S.SubmitBtn>완료</S.SubmitBtn>
    </S.ButtonBox>
  </S.Layout>
);

export default PhraseEditCard;
