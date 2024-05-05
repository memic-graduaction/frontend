import React from 'react';
import { useRecoilValue } from 'recoil';
import { scrapedPhrase, selectedPhrase } from 'src/recoil/states';
import styled from 'styled-components';
import PhraseCard from '../PhraseCard/PhraseCard';
import PhraseEditCard from '../PhraseCard/PhraseEditCard';

const PhraseList = () => {
  const phrase = useRecoilValue(selectedPhrase);
  const list = useRecoilValue(scrapedPhrase);
  return (
    <Layout>
      {phrase !== '' && <PhraseEditCard phrase={phrase} />}
      {list.map((v) => (
        <PhraseCard key={v.startIndex} phrase={v.startIndex} meaning={v.meaning} hashTags={v.tags} />
      ))}
    </Layout>
  );
};

export default PhraseList;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 85%;
  padding-left: 0.5rem;
  padding-top: 1rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1.25rem;
    background: rgba(217, 217, 217, 0.6);
  }
`;
