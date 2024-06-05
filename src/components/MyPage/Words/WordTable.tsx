import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userToken } from 'src/recoil/selectors';
import { getTagColor } from 'src/utils/getTagColor';
import styled from 'styled-components';

const WordTable = () => {
  const token = useRecoilValue(userToken);
  const [list, setList] = useState([]);

  const handleGetPhrases = async () => {
    try {
      const url = `/v1/phrases`;
      const response = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });
      setList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetPhrases();
  }, []);

  return (
    <Layout>
      <Row>
        <Title>Words</Title>
        <Title>뜻</Title>
        <Title>해시태그</Title>
        <Title>원본 영상</Title>
      </Row>
      {list.map((v, i) => (
        <Row key={v.id} style={{ background: i % 2 === 0 ? 'white' : '#F1F0FA' }}>
          <Content>{v.phrase}</Content>
          <Content>{v.meaning}</Content>
          <Content>
            {v.tags.map((tag) => (
              <HashTag style={{ background: getTagColor() }}># {tag.name}</HashTag>
            ))}
          </Content>
          <Content>
            <a href={v.url}>링크</a>
          </Content>
        </Row>
      ))}
    </Layout>
  );
};

export default WordTable;

const Layout = styled.div`
  width: 68rem;
  height: 34rem;
  border-radius: 1rem;
  border: 1px solid #ececec;
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

const Row = styled.div`
  display: grid;
  min-height: 3.625rem;
  grid-template-columns: 1fr 1fr 1.2fr 0.5fr;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.1rem;
  font-size: 1rem;
  font-weight: 500;
  border: 0.1px solid #ececec;
  overflow-wrap: break-word;
  gap: 1rem;
`;

const Title = styled(Content)`
  color: #766daa;
  font-size: 1.2rem;
`;

export const HashTag = styled.div`
  display: flex;
  height: 1.6875rem;
  padding: 0.5rem 0.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3rem;
  background: #b8a0ff;
  color: white;
`;
