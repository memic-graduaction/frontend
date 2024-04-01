import { useSetRecoilState } from 'recoil';
import { recordingState } from 'src/recoil/states';

const MicRecorder = require('mic-recorder-to-mp3');

export const useStartRecording = () => {
  const setRecordingStatus = useSetRecoilState(recordingState);

  const startRecording = async (setRecorder) => {
    setRecordingStatus('recording');
    const mp3Recorder = new MicRecorder({ bitRate: 128, encoder: 'mp3' });
    try {
      await mp3Recorder.start();
      setRecorder(mp3Recorder);
    } catch (error) {
      alert('음성을 녹음하는 도중 문제가 발생했습니다');
    }
  };

  return startRecording;
};
