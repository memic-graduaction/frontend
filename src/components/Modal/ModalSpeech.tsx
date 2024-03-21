/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  audioUrlState,
  recognizedSentence,
  recordingState,
  scriptIDstate,
  scriptSentencestate,
} from 'src/recoil/states';
import { Microphone, Stop } from 'src/utils/Icons';
import styled from 'styled-components';
import axios from 'axios';

const MicRecorder = require('mic-recorder-to-mp3');

const BaseUrl = process.env.REACT_APP_BASE_URL;

function ModalSpeech() {
  const sentence = useRecoilValue(scriptSentencestate);
  const scriptId = useRecoilValue(scriptIDstate);
  const [recordingStatus, setRecordingStatus] = useRecoilState(recordingState);
  const setAudioUrl = useSetRecoilState(audioUrlState);
  const [recorder, setRecorder] = useState(null);
  const setResultStr = useSetRecoilState(recognizedSentence);
  const serverUrl = `${BaseUrl}/v1/recognized-sentences`;

  useEffect(() => {
    setRecordingStatus('inactive');
  }, []);

  const startRecording = async () => {
    setRecordingStatus('recording');
    const mp3Recorder = new MicRecorder({ bitRate: 128, encoder: 'mp3' });
    try {
      await mp3Recorder.start();
      setRecorder(mp3Recorder);
    } catch (error) {
      alert('음성을 녹음하는 도중 문제가 발생했습니다');
    }
  };

  const stopRecording = async () => {
    try {
      // 음성 녹음을 blob형태의 파일로 만든 후 url을 audioUrl 변수에 저장
      const buffer = await recorder.stop().getMp3();
      const webmFile = new File(buffer, 'speech.webm', {
        type: 'audio/mpeg',
      });
      const newAudioUrl = URL.createObjectURL(webmFile);
      setAudioUrl(newAudioUrl);
      setRecordingStatus('loading'); // 로딩중으로 녹음 상태 변환

      const response = await fetch(newAudioUrl);
      const blob = await response.blob();
      const IdObject = { id: scriptId };

      const formData = new FormData();
      formData.append('speech', blob, 'speech.mp3');
      const jsonStr = JSON.stringify(IdObject);
      formData.append('sentence', new Blob([jsonStr], { type: 'application/json' }));

      for (const x of formData.entries()) {
        console.log(x[0], '/', x[1]);
      }

      axios
        .post(serverUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log('음성파일 업로드 성공', res.data);
          setResultStr(res.data.recognizedSentence);
        })
        .then((error) => {
          console.log(error);
        });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Layout>
      <TextTitle>*&nbsp;문장을 발음해보세요</TextTitle>
      <TextLayout>{sentence}</TextLayout>
      {recordingStatus === 'inactive' ? (
        <IconLayout onClick={startRecording}>
          <Microphone />
        </IconLayout>
      ) : null}
      {recordingStatus === 'recording' ? (
        <IconLayout onClick={stopRecording}>
          <Stop />
        </IconLayout>
      ) : null}
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

const IconLayout = styled.button`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2.5rem;
`;
