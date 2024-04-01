/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { audioUrlState, recordingState, scriptIDstate } from 'src/recoil/states';

export const useStopRecording = () => {
  const scriptId = useRecoilValue(scriptIDstate);
  const setAudioUrl = useSetRecoilState(audioUrlState);
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

      return { blob, IdObject };
    } catch (error: any) {
      alert(error.message);
    }
  };

  return stopRecording;
};
