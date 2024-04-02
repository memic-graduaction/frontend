import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { recognizedSentence, recordingState, scriptSentencestate } from 'src/recoil/states';
import styled from 'styled-components';
import { useStartRecording } from 'src/utils/useStartRecording';
import { useStopRecording } from 'src/utils/useStopRecording';
import axios from 'axios';
import { useModalStack } from 'src/utils/useModalStack';
import SpeechBtn from './ModalButtons/SpeechBtn';
import StopSpeechBtn from './ModalButtons/StopSpeechBtn';
import ModalResult from './ModalResult';
import ModalLoading from './ModalLoading';

const BaseUrl = process.env.REACT_APP_BASE_URL;

function ModalSpeech() {
  const sentence = useRecoilValue(scriptSentencestate);
  const [recordingStatus, setRecordingStatus] = useRecoilState(recordingState);
  const [recorder, setRecorder] = useState(null);
  const startRecording = useStartRecording();
  const stopRecording = useStopRecording();
  const setResultStr = useSetRecoilState(recognizedSentence);
  const modalStack = useModalStack();

  const handleStopBtnClick = async () => {
    modalStack.push({ key: 'modal-loading', Component: ModalLoading });
    const serverUrl = `${BaseUrl}/v1/recognized-sentences`;
    const { blob, IdObject } = await stopRecording(recorder);
    const formData = new FormData();
    formData.append('speech', blob, 'speech.mp3');
    const jsonStr = JSON.stringify(IdObject);
    formData.append('sentence', new Blob([jsonStr], { type: 'application/json' }));
    axios
      .post(serverUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        setResultStr(res.data.recognizedSentence);
        modalStack.push({ key: 'modal-result', Component: ModalResult });
        setRecordingStatus('inactive');
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <TextTitle>* 문장을 발음해보세요</TextTitle>
      <TextLayout>{sentence}</TextLayout>
      {recordingStatus === 'inactive' ? <SpeechBtn onClick={() => startRecording(setRecorder)} /> : null}
      {recordingStatus === 'recording' ? <StopSpeechBtn onClick={handleStopBtnClick} /> : null}
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
