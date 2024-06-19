import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { audioUrlState, recognizedWords, recordingState, scriptSentencestate } from 'src/recoil/states';
import styled from 'styled-components';
import { useStartRecording } from 'src/utils/useStartRecording';
import { useStopRecording } from 'src/utils/useStopRecording';
import axios from 'axios';
import { useModalStack } from 'src/utils/useModalStack';
import SpeechBtn from './ModalButtons/SpeechBtn';
import StopSpeechBtn from './ModalButtons/StopSpeechBtn';
import ModalResult from './ModalResult';
import ModalLoading from './ModalLoading';
import * as S from './Styles';

function ModalSpeech() {
  const sentence = useRecoilValue(scriptSentencestate);
  const [recordingStatus, setRecordingStatus] = useRecoilState(recordingState);
  const [recorder, setRecorder] = useState(null);
  const setAudioUrl = useSetRecoilState(audioUrlState);
  const startRecording = useStartRecording();
  const stopRecording = useStopRecording();
  const setResultStr = useSetRecoilState(recognizedWords);
  const modalStack = useModalStack();

  const handleStopBtnClick = async () => {
    modalStack.push({ key: 'modal-loading', Component: ModalLoading });
    const serverUrl = '/v1/recognized-sentences';
    const { blob, IdObject } = await stopRecording(recorder, setAudioUrl);
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
        setResultStr(res.data.recognizedWords);
        modalStack.push({ key: 'modal-result', Component: ModalResult });
        setRecordingStatus('inactive');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <S.TitleBox>* 버튼을 눌러 문장을 발음해보세요!</S.TitleBox>
      {recordingStatus === 'inactive' ? <SpeechBtn onClick={() => startRecording(setRecorder)} /> : null}
      {recordingStatus === 'recording' ? <StopSpeechBtn onClick={handleStopBtnClick} /> : null}
      <TextLayout>{sentence}</TextLayout>
    </Layout>
  );
}

export default ModalSpeech;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TextLayout = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 350;
  line-height: 1.5;
  margin-top: 1rem;
`;
