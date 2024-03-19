/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { useRecoilState } from 'recoil';
import { audioUrlState } from 'src/recoil/states';

const MicRecorder = require('mic-recorder-to-mp3');

function FFmpegService() {
  const ffmpeg = createFFmpeg({
    log: true,
  });

  const [audioUrl, setAudioUrl] = useRecoilState(audioUrlState);
  const [recorder, setRecorder] = useState(null);
  const [isAudioPlay, setIsAudioPlay] = useState(false);

  const startRecording = async () => {
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
      const [buffer, blob] = await recorder.stop().getMp3();
      const webmFile = new File(buffer, 'speech.webm', {
        type: blob.type,
      });
      const newAudioUrl = URL.createObjectURL(webmFile);
      setAudioUrl(newAudioUrl);
    } catch (error) {
      alert('녹음 결과 반환 도중 오류가 발생했습니다');
    }
  };

  const convertWebmToMP3 = async () => {
    await ffmpeg.load();
    ffmpeg.FS('writeFile', 'speech.webm', await fetchFile(audioUrl));
    await ffmpeg.run('-i', 'speech.webm', 'speech.mp3');
    const mp3File = ffmpeg.FS('readFile', 'speech.mp3');
    const mp3Blob = new Blob([mp3File.buffer], { type: 'audio/mpeg' });
    const mp3Url = URL.createObjectURL(mp3Blob);
    setAudioUrl(mp3Url);

    // mp3 파일 다운로드
    const a = document.createElement('a');
    a.href = mp3Url;
    document.body.appendChild(a);
    a.download = 'speech.mp3';
    a.click();
  };

  return (
    <>
      <button onClick={startRecording} style={{ color: 'white' }}>
        녹음 시작
      </button>
      <button onClick={stopRecording} style={{ color: 'white' }}>
        녹음 중지
      </button>
      <button onClick={convertWebmToMP3} style={{ color: 'white' }}>
        변환 시작
      </button>
      <button onClick={() => setIsAudioPlay(true)}>녹음 재생</button>
      {isAudioPlay ? <audio src={audioUrl} autoPlay /> : null}
    </>
  );
}

export default FFmpegService;
