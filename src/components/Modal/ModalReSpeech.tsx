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
import * as S from './Styles';

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
      <S.TitleBox>* 단어를 다시 한 번 발음해 보세요</S.TitleBox>
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
  gap: 2.5rem;
`;

const TextLayout = styled.div`
  height: 4rem;
  width: 21rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  background: #fff6c6;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
`;
