import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { scrapedListById, youtubeIDSelector } from 'src/recoil/selectors';
import { highLightPhrase, selectedHighLight } from 'src/recoil/states';
import PhraseCard from '../PhraseCard/PhraseCard';

const PhraseList = () => {
  const [list, setList] = useState([]);
  const youtubeId = useRecoilValue(youtubeIDSelector);
  const getScrap = useRecoilValue(scrapedListById(youtubeId));
  const setPhrase = useSetRecoilState(highLightPhrase);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const selectedPhrase = useRecoilValue(selectedHighLight);

  const handleGetPhrases = async () => {
    if (youtubeId) {
      getScrap().then((data) => {
        setList(data);
        const newPhrases = data.map((v) => ({ id: v.sentenceId, phrase: v.phrase }));
        setPhrase(newPhrases);
      });
    }
  };

  useEffect(() => {
    handleGetPhrases();
  }, []);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const selectedIndex = list.findIndex((item) => item.sentenceId === selectedPhrase?.sentenceId);
      if (selectedIndex !== -1) {
        cardRefs.current[selectedIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [list, selectedPhrase]);

  return (
    <Layout>
      {list.length > 0 ? (
        list.map((v, index) => (
          <PhraseCard
            key={v.id}
            sentenceId={v.sentenceId}
            phrase={v.phrase}
            meaning={v.meaning}
            TagIds={v.tags.map((tag) => tag.name)}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
          />
        ))
      ) : (
        <NullLayout>스크립트에서 표현을 저장해보세요 !</NullLayout>
      )}
    </Layout>
  );
};

export default PhraseList;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;
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

const NullLayout = styled.div`
  width: 90%;
  height: 100%;
  color: #9f93af;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
