import { selector, selectorFamily } from 'recoil';
import { UUid, recognizedWords, scrapedPhrase, youtubeIDstate, youtubeLinkState } from './states';

// selector
export const isAllMatched = selector({
  key: 'isAllMatched',
  get: ({ get }) => {
    const wordList = get(recognizedWords);
    let allMatched = true;
    wordList.forEach((v) => {
      if (v.isMatchedWithTranscription === false) allMatched = false;
    });
    return allMatched;
  },
});

export const userToken = selector({
  key: 'userToken',
  get: ({ get }) => {
    const user = get(UUid);
    const token = user.accessToken;
    return token;
  },
});

export const youtubeIDSelector = selector({
  key: 'youtubeIDSelector',
  get: ({ get }) => {
    const youtubelink = get(youtubeLinkState);
    const youtubeIdList = get(youtubeIDstate);
    const newList = [...youtubeIdList];
    let matchingYoutubeId = null;
    newList?.forEach((item) => {
      if (item.url === youtubelink) matchingYoutubeId = item.id;
    });
    return matchingYoutubeId;
  },
});

export const scrapedSentences = selectorFamily<string[], number>({
  key: 'scrapedSentences',
  get:
    (params: number) =>
    ({ get }) => {
      const phrases = get(scrapedPhrase);
      // { sentenceId : [[startIndex1,endIndex1],...]} 구조
      const sentenceMap = {};
      phrases.forEach((v) => {
        const sentenceList = sentenceMap[`${v.sentenceId}`] || [];
        sentenceList.push(v.sentence);
        sentenceMap[v.sentenceId] = sentenceList;
      });
      return sentenceMap[params];
    },
});
