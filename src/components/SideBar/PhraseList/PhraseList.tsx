import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { scrapedListById, youtubeIDSelector } from 'src/recoil/selectors';
import { highLightPhrase } from 'src/recoil/states';
import PhraseCard from '../PhraseCard/PhraseCard';

const PhraseList = () => {
  const [list, setList] = useState([]);
  const [tags, setTags] = useState([]);
  const youtubeId = useRecoilValue(youtubeIDSelector);
  const getScrap = useRecoilValue(scrapedListById(youtubeId));
  const setPhrase = useSetRecoilState(highLightPhrase);
  const [loading, setLoading] = useState(true);

  const handleGetPhrases = async () => {
    if (youtubeId) {
      getScrap().then((data) => {
        setList(data);
        const tagList = data?.map((v) => v.tags.map((tag) => tag.name));
        setTags(tagList);
        const newPhrases = data.map((v) => ({ id: v.sentenceId, phrase: v.phrase }));
        setPhrase(newPhrases);
        setLoading(false);
      });
    }
  };
  useEffect(() => {
    handleGetPhrases();
  }, []);

  return (
    <Layout>
      {list.length > 0
        ? list.map((v, i) => (
            <PhraseCard key={v.id} sentenceId={v.sentenceId} phrase={v.phrase} meaning={v.meaning} TagIds={tags[i]} />
          ))
        : !loading && <NullLayout>스크립트에서 표현을 저장해보세요 !</NullLayout>}
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
