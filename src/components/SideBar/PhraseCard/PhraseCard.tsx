import React from 'react';
import { Edit } from 'src/assets/Icons';
import { getTagColor } from 'src/utils/getTagColor';
import * as S from './Styles';

interface Props {
  phrase: string;
  meaning: string;
  TagIds: string[];
}

const PhraseCard = ({ phrase, meaning, TagIds }: Props) => (
  <S.Layout>
    <S.IconBox>
      <Edit />
    </S.IconBox>
    <S.PhraseBox>{phrase}</S.PhraseBox>
    <S.MeaningBox>{meaning}</S.MeaningBox>
    <S.HashTagBox>
      {TagIds.map((_, i) => (
        <S.HashTag style={{ background: getTagColor(i) }}>#tag</S.HashTag>
      ))}
    </S.HashTagBox>
  </S.Layout>
);

export default PhraseCard;
