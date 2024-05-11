import React from 'react';
import { Edit } from 'src/assets/Icons';
import { getTagColor } from 'src/utils/getTagColor';
import { useRecoilValue } from 'recoil';
import { selectedHighLight } from 'src/recoil/states';
import * as S from './Styles';

interface Props {
  sentenceId: number;
  phrase: string;
  meaning: string;
  TagIds: string[];
}

const PhraseCard = ({ sentenceId, phrase, meaning, TagIds }: Props) => {
  const selected = useRecoilValue(selectedHighLight);
  let isSelected = false;
  if (selected) {
    isSelected = sentenceId === selected.sentenceId && phrase === selected.phrase;
  }

  return (
    <S.Layout isSelected={isSelected}>
      <S.IconBox>
        <Edit />
      </S.IconBox>
      <S.PhraseBox isSelected={isSelected}>{phrase}</S.PhraseBox>
      <S.MeaningBox>{meaning}</S.MeaningBox>
      <S.HashTagBox>
        {TagIds.map((v) => (
          <S.HashTag style={{ background: getTagColor() }}>{v}</S.HashTag>
        ))}
      </S.HashTagBox>
    </S.Layout>
  );
};

export default PhraseCard;
