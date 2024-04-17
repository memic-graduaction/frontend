import React from 'react';
import { useRecoilValue } from 'recoil';
import { phraseList, selectedPhrase } from 'src/recoil/states';
import PhraseCard from '../PhraseCard/PhraseCard';
import PhraseEditCard from '../PhraseCard/PhraseEditCard';

const PhraseList = () => {
  const phrase = useRecoilValue(selectedPhrase);
  const list = useRecoilValue(phraseList);
  return (
    <>
      {phrase !== '' && <PhraseEditCard phrase={phrase} />}
      {list.map((v) => (
        <PhraseCard key={v.sentence} phrase={v.sentence} meaning={v.meaning} hashTags={v.tags} />
      ))}
    </>
  );
};

export default PhraseList;
