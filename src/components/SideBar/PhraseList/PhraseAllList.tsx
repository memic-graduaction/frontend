import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { scrapedList } from 'src/recoil/selectors';
import _ from 'lodash';
import { youtubeLinkState } from 'src/recoil/states';
import PhraseCard from '../PhraseCard/PhraseCard';

const PhraseAllList = () => {
  const [urlMap, setUrlMap] = useState({});
  const getScrap = useRecoilValue(scrapedList);
  const [loading, setLoading] = useState(true);
  const setYoutubeUrl = useSetRecoilState(youtubeLinkState);

  const handleGetPhrases = async () => {
    getScrap().then((data) => {
      const newUrlMap = _.groupBy(data, 'url');
      setUrlMap(newUrlMap);
      setLoading(false);
    });
  };

  const handleButtonClick = (key) => {
    setYoutubeUrl(key);
  };

  useEffect(() => {
    handleGetPhrases();
  }, []);

  return (
    <Layout>
      {Object.keys(urlMap).map((url) => (
        <CardLayout key={url}>
          <UrlButton onClick={() => handleButtonClick(url)}>영상 보러 가기</UrlButton>
          {urlMap[url].map((item) => (
            <PhraseCard
              key={item.id}
              sentenceId={item.sentenceId}
              phrase={item.phrase}
              meaning={item.meaning}
              TagIds={item.tags.map((tag) => tag.name)}
            />
          ))}
          <Border />
        </CardLayout>
      ))}
      {Object.keys(urlMap).length === 0 && !loading && <NullLayout>스크립트에서 표현을 저장해보세요 !</NullLayout>}
    </Layout>
  );
};

export default PhraseAllList;

const Layout = styled.div`
  width: 100%;
  height: 85%;
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

const CardLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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

const UrlButton = styled.button`
  width: 10rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.1rem;
  border-radius: 3rem;
  background: rgba(133, 133, 133, 0.24);
`;

const Border = styled.div`
  width: 90%;
  border: 0.1px solid rgba(133, 133, 133, 0.24);
  margin-bottom: 1.5rem;
`;
