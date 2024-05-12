import React, { Ref, forwardRef, useEffect, useState } from 'react';
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

const PhraseCard = forwardRef(({ sentenceId, phrase, meaning, TagIds }: Props, ref: Ref<HTMLDivElement>) => {
  const selectedPhrase = useRecoilValue(selectedHighLight);
  const [isHighLighted, setIsHighLighted] = useState(false);

  useEffect(() => {
    if (selectedPhrase) {
      setIsHighLighted(sentenceId === selectedPhrase.sentenceId && phrase === selectedPhrase.phrase);
    }
  }, [selectedPhrase]);

  return (
    <S.Layout $isselected={isHighLighted} ref={ref}>
      <S.IconBox>
        <Edit />
      </S.IconBox>
      <S.PhraseBox $isselected={isHighLighted}>{phrase}</S.PhraseBox>
      <S.MeaningBox>{meaning}</S.MeaningBox>
      <S.HashTagBox>
        {TagIds.map((v) => (
          <S.HashTag style={{ background: getTagColor() }}>{v}</S.HashTag>
        ))}
      </S.HashTagBox>
    </S.Layout>
  );
});

export default React.memo(PhraseCard);
