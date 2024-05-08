import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { scrapedPhrase } from 'src/recoil/states';
import styled from 'styled-components';
import axios from 'axios';
import PhraseCard from '../PhraseCard/PhraseCard';

const token = process.env.REACT_APP_ACCESS_TOKEN;

const PhraseList = () => {
  const list = useRecoilValue(scrapedPhrase);

  const handleGetPhrases = async () => {
    try {
      const response = await axios.get('/v1/phrases', {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleGetPhrases();
  }, []);
  return (
    <Layout>
      {list.map((v) => (
        <PhraseCard key={v.sentence} phrase={v.sentence} meaning={v.meaning} TagIds={v.tags} />
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
