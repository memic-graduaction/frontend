import React, { useState } from 'react';
import styled from 'styled-components';
import { recordingState } from 'src/recoil/states';
import { useStartRecording } from 'src/utils/useStartRecording';
import { useStopRecording } from 'src/utils/useStopRecording';
import { useModalStack } from 'src/utils/useModalStack';
import { useRecoilValue } from 'recoil';
import StopSpeechBtn from './ModalButtons/StopSpeechBtn';
import SpeechBtn from './ModalButtons/SpeechBtn';
import ModalReResult from './ModalReResult';

interface Prop {
  word: string;
}

function ModalReSpeech({ word }: Prop) {
  const recordingStatus = useRecoilValue(recordingState);
  const [recorder, setRecorder] = useState(null);
  const startRecording = useStartRecording();
  const stopRecording = useStopRecording();
  const { push } = useModalStack();

  const handleStopBtnClick = async () => {
    stopRecording(recorder);
    push({
      key: 'modal-reresult',
      Component: ModalReResult,
      Props: { word },
      popTwice: true,
    });
  };

  return (
    <Layout>
      <TextTitle>* 단어를 다시 한 번 발음해 보세요</TextTitle>
      <TextLayout>{word}</TextLayout>
      {recordingStatus === 'inactive' ? <SpeechBtn onClick={() => startRecording(setRecorder)} /> : null}
      {recordingStatus === 'recording' ? <StopSpeechBtn onClick={handleStopBtnClick} /> : null}
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
