import React, { useEffect } from 'react';
import { MoonLoader } from 'react-spinners';
import { useSetRecoilState } from 'recoil';
import { recordingState } from 'src/recoil/states';
import styled from 'styled-components';

function ModalLoading() {
  const setRecordingStatus = useSetRecoilState(recordingState);
  useEffect(() => {
    setTimeout(() => {
      setRecordingStatus('completed');
    }, 3000);
  }, []);
  return (
    <Layout>
      <MoonLoader color="#FF5C5C" size={80} />
      <TextBlack>발음을 분석하고 있어요!</TextBlack>
    </Layout>
  );
}

export default ModalLoading;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
