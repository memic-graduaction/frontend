import React from 'react';
import styled from 'styled-components';
import { Edit } from 'src/assets/Icons';

interface Props {
  phrase: string;
  meaning: string;
  hashTags: string[];
}

const PhraseCard = ({ phrase, meaning, hashTags }: Props) => (
  <Layout>
    <EditIcon>
      <Edit />
    </EditIcon>
    <PhraseBox>{phrase}</PhraseBox>
    <MeaningBox>{meaning}</MeaningBox>
    <HashTagBox>
      {hashTags.map((v) => (
        <HashTag>#{v}</HashTag>
      ))}
    </HashTagBox>
  </Layout>
);

export default PhraseCard;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 27.125rem;
  height: 8.625rem;
  border-radius: 0.625rem;
  background: white;
  position: relative;
  padding: 1rem;
  box-shadow: 0 0 10px 1px rgba(0 0 0 / 15%);
`;

const EditIcon = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const PhraseBox = styled.div`
  color: #4f4957;
  font-size: 1.25rem;
  font-weight: 500;
`;

const MeaningBox = styled(PhraseBox)`
  font-size: 1rem;
  font-weight: 300;
`;

const HashTagBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const HashTag = styled.div`
  display: flex;
  width: 4.75rem;
  height: 1.6875rem;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3rem;
  background: #b8a0ff;
  color: white;
`;

// const EditBtn = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
// `;
