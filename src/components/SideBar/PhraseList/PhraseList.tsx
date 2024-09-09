import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { userToken, youtubeIDSelector } from 'src/recoil/selectors';
import { forceRefresh, highLightPhrase, selectedHighLight } from 'src/recoil/states';
import axios from 'axios';
import PhraseCard from '../PhraseCard/PhraseCard';

const PhraseList = () => {
  const [list, setList] = useState([]);
  const youtubeId = useRecoilValue(youtubeIDSelector);
  const setPhrase = useSetRecoilState(highLightPhrase);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const selectedPhrase = useRecoilValue(selectedHighLight);
  const token = useRecoilValue(userToken);
  const refresh = useRecoilValue(forceRefresh);

  const handleGetPhrases = async () => {
    if (youtubeId) {
      try {
        const url = `/v1/phrases/transcriptions/${youtubeId}`;
        const response = await axios.get(url, {
          headers: {
            Authorization: token,
          },
        });
        console.log('api 호출');
        setList(response.data);
        const newPhrases = response.data.map((v) => ({ id: v.sentenceId, phrase: v.phrase }));
        setPhrase(newPhrases);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    handleGetPhrases();
  }, [refresh]);

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
        <NullLayout>스크립트에서 표현을 저장해보세요!</NullLayout>
      )}
    </Layout>
  );
};

export default PhraseList;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 85%;
  overflow-y: auto;
  gap: 1rem;
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
  color: #5a4e6a;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;
