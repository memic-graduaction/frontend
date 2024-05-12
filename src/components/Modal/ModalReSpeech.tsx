import React, { useState } from 'react';
import styled from 'styled-components';
import { recordingState, secondAudioUrl } from 'src/recoil/states';
import { useStartRecording } from 'src/utils/useStartRecording';
import { useStopRecording } from 'src/utils/useStopRecording';
import { useModalStack } from 'src/utils/useModalStack';
import { useRecoilState, useSetRecoilState } from 'recoil';
import axios from 'axios';
import StopSpeechBtn from './ModalButtons/StopSpeechBtn';
import SpeechBtn from './ModalButtons/SpeechBtn';
import ModalReResult from './ModalReResult';

interface Prop {
  word: string;
}

function ModalReSpeech({ word }: Prop) {
  const [recordingStatus, setRecordingStatus] = useRecoilState(recordingState);
  const [recorder, setRecorder] = useState(null);
  const setAudioUrl = useSetRecoilState(secondAudioUrl);
  const startRecording = useStartRecording();
  const stopRecording = useStopRecording();
  const { push } = useModalStack();
  const wordObj = JSON.stringify({ originalWord: word });
  const serverUrl = '/v1/speeches/words';

  const handleStopBtnClick = async () => {
    const { blob } = await stopRecording(recorder, setAudioUrl);
    const formData = new FormData();
    formData.append('speech', blob, 'speech.mp3');
    formData.append('word', new Blob([wordObj], { type: 'application/json' }));
    axios
      .post(serverUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        const { data } = res;
        setRecordingStatus('inactive');
        push({
          key: 'modal-reresult',
          Component: ModalReResult,
          Props: { word: data.recognizedWord, isMatched: data.wordMatched },
          popTwice: true,
        });
      })
      .catch((error) => {
        console.log(error);
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
  width: 40vw;
  height: 12vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.9375rem;
  padding: 2vw 3vw;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  color: #ff5c5c;
`;
