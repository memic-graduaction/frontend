import { selector } from 'recoil';
import { recognizedSentence, scriptSentencestate } from './states';

// selector
export const incorrectWordsSelector = selector({
  key: 'incorrectWordsSelector',
  get: ({ get }) => {
    const originalStr = get(scriptSentencestate);
    const resultStr = get(recognizedSentence);
    const originalArr = originalStr.split(' ');
    const resultArr = resultStr.split(' ');
    const incorrectIdx = [];

    for (let i = 0; i < originalArr.length; i += 1) {
      if (originalArr[i] !== resultArr[i]) {
        incorrectIdx.push(i);
      }
    }
    return incorrectIdx;
  },
});
