import React from 'react';
import styled from 'styled-components';
import SpeechBtn from './ModalButtons/SpeechBtn';

interface Prop {
  word: string;
}

function ModalReSpeech({ word }: Prop) {
  return (
    <Layout>
      <TextTitle>* 단어를 다시 한 번 발음해 보세요</TextTitle>
      <TextLayout>{word}</TextLayout>
      <SpeechBtn onClick={() => {}} />
    </Layout>
  );
}

export default ModalReSpeech;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TextTitle = styled.div`
  width: 100%;
  color: #ff5c5c;
  font-size: 1rem;
  font-style: normal;
  font-weight: 350;
  margin-bottom: 2rem;
`;

const TextLayout = styled.div`
  width: 42rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.9375rem;
  padding-bottom: 1rem;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
  font-size: 6.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  color: #ff5c5c;
`;
