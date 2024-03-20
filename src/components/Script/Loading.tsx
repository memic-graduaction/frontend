import React from 'react';
import { MoonLoader } from 'react-spinners';
import styled from 'styled-components';

function Loading() {
  return (
    <Layout>
      <MoonLoader color="#FF5C5C" size={80} />
      <TextBlack>스크립트를 불러오고 있어요!</TextBlack>
    </Layout>
  );
}

export default Loading;

const Layout = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const TextBlack = styled.div`
  color: #4a4a4a;
  text-align: center;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.05625rem;
`;
