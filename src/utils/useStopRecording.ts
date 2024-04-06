/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRecoilValue } from 'recoil';
import { scriptIDstate } from 'src/recoil/states';

export const useStopRecording = () => {
  const scriptId = useRecoilValue(scriptIDstate);

  const stopRecording = async (recorder, setAudioUrl) => {
    try {
      // 음성 녹음을 blob형태의 파일로 만든 후 url을 audioUrl 변수에 저장
      const buffer = await recorder.stop().getMp3();
      const webmFile = new File(buffer, 'speech.webm', {
        type: 'audio/mpeg',
      });
      const newAudioUrl = URL.createObjectURL(webmFile);
      setAudioUrl(newAudioUrl);

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
