import React from 'react';
import { Stop } from 'src/utils/Icons';
import styled from 'styled-components';

function ModalSpeech() {
  return (
    <Layout>
      <AdviceText>*문장을 발음해보세요</AdviceText>
      <TextLayout>that we’ve had this morning that in the last hour a very powerful earthquake has struck</TextLayout>
      <IconLayout>
        <Stop />
      </IconLayout>
    </Layout>
  );
}

export default ModalSpeech;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const AdviceText = styled.div`
  width: 100%;
  color: #ff5c5c;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const TextLayout = styled.div`
  width: 42rem;
  display: flex;
  align-items: center;
  border-radius: 0.9375rem;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
  padding: 3rem;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.3;
`;

const IconLayout = styled.button`
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 50rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2rem;
`;
