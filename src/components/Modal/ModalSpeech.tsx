/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { audioUrlState, recordingState, scriptSentencestate } from 'src/recoil/states';
import { Microphone, Stop } from 'src/utils/Icons';
import styled from 'styled-components';

function ModalSpeech() {
  const sentence = useRecoilValue(scriptSentencestate);
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  // recordingStatus : "inactive", "recording", "completed"
  const [recordingStatus, setRecordingStatus] = useRecoilState(recordingState);
  // getUserMedia 함수로부터 반환받는 MediaStream 변수
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  // 레코딩된 음성 파일의 blob URL
  const setAudioUrl = useSetRecoilState(audioUrlState);
  const getMicrophonePermission = async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch {
        alert('Permission 에러');
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.');
    }
  };

  useEffect(() => {
    getMicrophonePermission();
    setRecordingStatus('inactive');
  }, []);

  const startRecording = async () => {
    setRecordingStatus('recording');
    const media = new MediaRecorder(stream, { mimeType: 'audio/webm' });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    const localAudioChunks: React.SetStateAction<any[]> = [];
    mediaRecorder.current.ondataavailable = (event: { data: { size: number } }) => {
      if (typeof event.data === 'undefined') return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    setRecordingStatus('loading');
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      const newAudioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(newAudioUrl);
      setAudioChunks([]);
    };
  };
  return (
    <Layout>
      <TextTitle>*&nbsp;문장을 발음해보세요</TextTitle>
      <TextLayout>{sentence}</TextLayout>
      {permission && recordingStatus === 'inactive' ? (
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
