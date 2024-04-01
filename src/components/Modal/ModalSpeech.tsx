/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recordingState, scriptSentencestate } from 'src/recoil/states';
import styled from 'styled-components';
import { useStartRecording } from 'src/utils/useStartRecording';
import { useStopRecording } from 'src/utils/useStopRecording';
import SpeechBtn from './SpeechBtn';
import StopSpeechBtn from './StopSpeechBtn';

function ModalSpeech() {
  const sentence = useRecoilValue(scriptSentencestate);
  const [recordingStatus, setRecordingStatus] = useRecoilState(recordingState);
  const [recorder, setRecorder] = useState(null);
  const startRecording = useStartRecording();
  const stopRecording = useStopRecording();

  useEffect(() => {
    setRecordingStatus('inactive');
  }, []);

  return (
    <Layout>
      <TextTitle>* 문장을 발음해보세요</TextTitle>
      <TextLayout>{sentence}</TextLayout>
      {recordingStatus === 'inactive' ? <SpeechBtn onClick={() => startRecording(setRecorder)} /> : null}
      {recordingStatus === 'recording' ? <StopSpeechBtn onClick={() => stopRecording(recorder)} /> : null}
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

const TextTitle = styled.div`
  width: 100%;
  color: #ff5c5c;
  font-size: 1rem;
  font-style: normal;
  font-weight: 350;
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
