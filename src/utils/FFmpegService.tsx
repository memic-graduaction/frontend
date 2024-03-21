/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { audioUrlState } from 'src/recoil/states';
import axios from 'axios';

const MicRecorder = require('mic-recorder-to-mp3');

function FFmpegService() {
  const [audioUrl, setAudioUrl] = useRecoilState(audioUrlState);
  const [recorder, setRecorder] = useState(null);
  const [isAudioPlay, setIsAudioPlay] = useState(false);

  const startRecording = async () => {
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
      const [buffer, blob] = await recorder.stop().getMp3();
      console.log(blob.type);
      const webmFile = new File(buffer, 'speech.webm', {
        type: 'audio/mpeg',
      });
      const newAudioUrl = URL.createObjectURL(webmFile);
      setAudioUrl(newAudioUrl);
    } catch (error) {
      alert('녹음 결과 반환 도중 오류가 발생했습니다');
    }
  };

  const handlePost = async () => {
    // api post body 구성
    const IdObject = { id: 1 };

    fetch(audioUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const formData = new FormData();
        formData.append('speech', blob, 'speech.mp3');
        const jsonStr = JSON.stringify(IdObject);
        formData.append('sentence', new Blob([jsonStr], { type: 'application/json' }));

        for (const x of formData.entries()) {
          console.log(x[0], '/', x[1]);
        }

        axios
          .post('http://13.125.213.188:8080/v1/recognized-sentences', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            console.log('음성파일 업로드 성공', response.data);
          })
          .then((error) => {
            console.log(error);
          });
      });
  };

  return (
    <>
      <button onClick={startRecording} style={{ color: 'white' }}>
        녹음 시작
      </button>
      <button onClick={stopRecording} style={{ color: 'white' }}>
        녹음 중지
      </button>
      <button onClick={handlePost}>api보내기</button>
      <button onClick={() => setIsAudioPlay(true)}>녹음 재생</button>
      {isAudioPlay ? <audio src={audioUrl} autoPlay /> : null}
    </>
  );
}

export default FFmpegService;
