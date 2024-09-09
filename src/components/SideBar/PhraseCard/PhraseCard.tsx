import React, { Ref, forwardRef, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedHighLight, sideBarOpenState } from 'src/recoil/states';
import { Close, Index } from 'src/assets/Icons';
import * as S from './Styles';

interface Props {
  sentenceId: number;
  phrase: string;
  meaning: string;
  TagIds: string[];
}

const PhraseCard = forwardRef(({ sentenceId, phrase, meaning, TagIds }: Props, ref: Ref<HTMLDivElement>) => {
  const selectedPhrase = useRecoilValue(selectedHighLight);
  const isSideBarOpen = useRecoilValue(sideBarOpenState);
  const [isHighLighted, setIsHighLighted] = useState(false);

  useEffect(() => {
    if (selectedPhrase) {
      setIsHighLighted(sentenceId === selectedPhrase.sentenceId && phrase === selectedPhrase.phrase);
    }
  }, [selectedPhrase]);

  useEffect(() => {
    if (!isSideBarOpen) setIsHighLighted(false);
  }, [isSideBarOpen]);

  return (
    <S.Layout $isselected={isHighLighted} ref={ref}>
      <S.IconBox>
        <Index />
        <Close />
      </S.IconBox>
      <S.HashTagBox>
        {TagIds.map((v) => (
          <S.HashTag>#{v}</S.HashTag>
        ))}
      </S.HashTagBox>
      <S.PhraseBox $isselected={isHighLighted}>{phrase}</S.PhraseBox>
      <S.MeaningBox>{meaning}</S.MeaningBox>
    </S.Layout>
  );
});

export default React.memo(PhraseCard);
