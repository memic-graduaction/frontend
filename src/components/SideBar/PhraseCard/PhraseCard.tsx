import React from 'react';
import { Edit } from 'src/assets/Icons';
import * as S from './Styles';

interface Props {
  phrase: string;
  meaning: string;
  hashTags: string[];
}

const PhraseCard = ({ phrase, meaning, hashTags }: Props) => (
  <S.Layout>
    <S.IconBox>
      <Edit />
    </S.IconBox>
    <S.PhraseBox>{phrase}</S.PhraseBox>
    <S.MeaningBox>{meaning}</S.MeaningBox>
    <S.HashTagBox>
      {hashTags.map((v) => (
        <S.HashTag>#{v}</S.HashTag>
      ))}
    </S.HashTagBox>
  </S.Layout>
);

export default PhraseCard;
