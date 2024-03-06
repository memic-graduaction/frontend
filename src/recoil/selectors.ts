import { selector } from 'recoil';
import { recognizedSentence, speechSentence } from './states';

// selector
export const incorrectWordsSelector = selector({
  key: 'incorrectWordsSelector',
  get: ({ get }) => {
    const originalStr = get(speechSentence);
    const resultStr = get(recognizedSentence);
    const originalArr = originalStr.split(' ');
    const incorrectIdx = [];

    for (let i = 0; i < originalArr.length; i += 1) {
      if (originalArr[i] !== resultStr[i]) {
        incorrectIdx.push(i);
      }
    }
    return incorrectIdx;
  },
});
