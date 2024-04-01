/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { audioUrlState, recognizedSentence, recordingState, scriptIDstate } from 'src/recoil/states';

const BaseUrl = process.env.REACT_APP_BASE_URL;

export const useStopRecording = () => {
  const serverUrl = `${BaseUrl}/v1/recognized-sentences`;
  const scriptId = useRecoilValue(scriptIDstate);
  const setAudioUrl = useSetRecoilState(audioUrlState);
  const setResultStr = useSetRecoilState(recognizedSentence);
  const setRecordingStatus = useSetRecoilState(recordingState);

  const stopRecording = async (recorder) => {
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

  return stopRecording;
};
