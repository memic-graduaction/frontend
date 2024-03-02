/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
// import * as S from './Styles';

function RecordModal() {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  // recordingStatus : "inactive", "paused", "recording"
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  // getUserMedia 함수로부터 반환받는 MediaStream 변수
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  // 레코딩된 음성 파일의 blob URL
  const [audioUrl, setAudioUrl] = useState(null);
  const [isPlay, setIsPlay] = useState(false);
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
    setRecordingStatus('inactive');
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      const newAudioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(newAudioUrl);
      setAudioChunks([]);
      setIsPlay(false);
    };
  };

  return (
    <div>
      <h2>Audio Recorder</h2>
      <main>
        <div className="audio-controls">
          {permission && recordingStatus === 'inactive' ? (
            <button onClick={startRecording} type="button">
              Start Recording
            </button>
          ) : null}
          {recordingStatus === 'recording' ? (
            <button onClick={stopRecording} type="button">
              Stop Recording
            </button>
          ) : null}
        </div>
        <button
          type="button"
          onClick={() => {
            setIsPlay(true);
          }}
        >
          녹음 재생
        </button>
        {audioUrl && isPlay ? (
          <div className="audio-container">
            <audio src={audioUrl} autoPlay />
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default RecordModal;
