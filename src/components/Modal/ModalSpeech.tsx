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

function ModalSpeech() {
  const sentence = useRecoilValue(scriptSentencestate);
  const scriptId = useRecoilValue(scriptIDstate);
  // recordingStatus : "inactive", "recording", "completed"
  const [recordingStatus, setRecordingStatus] = useRecoilState(recordingState);
  // getUserMedia 함수로부터 반환받는 MediaStream 변수
  // 레코딩된 음성 파일의 blob URL
  const setAudioUrl = useSetRecoilState(audioUrlState);
  const [recorder, setRecorder] = useState(null);
  const setResultStr = useSetRecoilState(recognizedSentence);

  useEffect(() => {
    setRecordingStatus('inactive');
  }, []);

  const startRecording = async () => {
    setRecordingStatus('recording');
    const mp3Recorder = new MicRecorder({ bitRate: 128 });
    try {
      await mp3Recorder.start();
      setRecorder(mp3Recorder);
    } catch (error) {
      alert('음성을 녹음하는 도중 문제가 발생했습니다');
    }
  };

  const stopRecording = async () => {
    try {
      setRecordingStatus('loading');
      const [buffer, blob] = await recorder.stop().getMp3();
      const file = new File(buffer, 'recordedFile.mp3', {
        type: blob.type,
      });
      const newAudioUrl = URL.createObjectURL(file);
      setAudioUrl(newAudioUrl);
      const IdObject = { sentenceId: scriptId };
      const formData = new FormData();
      formData.append('speech', file);
      formData.append('request', JSON.stringify(IdObject));
      for (const x of formData.entries()) {
        console.log(x[0], ' / ', x[1]);
      }

      axios
        .post('http://13.125.213.188:8080/v1/recognized-sentences', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log('음성파일 업로드 성공', response.data);
          setResultStr(response.data.recognizedSentence);
        });
    } catch (error) {
      alert('녹음 결과 반환 도중 오류가 발생했습니다');
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
