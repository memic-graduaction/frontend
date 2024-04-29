import { selector } from 'recoil';
import { recognizedWords } from './states';

// selector
export const isAllMatched = selector({
  key: 'isAllMatched',
  get: ({ get }) => {
    const wordList = get(recognizedWords);
    wordList.forEach((v) => {
      if (v.isMatchedWithTranscription === false) return false;
    });
    return true;
  },
});
