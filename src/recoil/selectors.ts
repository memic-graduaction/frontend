import axios from 'axios';
import { selector, selectorFamily } from 'recoil';
import {
  UUid,
  recognizedWords,
  youtubeIDstate,
  youtubeLinkState,
  selectedDateState,
  scriptSentencestate,
} from './states';
import { SelectedDate } from './types';

// selector
export const isAllMatched = selector({
  key: 'isAllMatched',
  get: ({ get }) => {
    const wordList = get(recognizedWords);
    const originalSentence = get(scriptSentencestate).split(' ');
    let allMatched = true;
    wordList.forEach((v) => {
      if (v.isMatchedWithTranscription === false) allMatched = false;
    });
    const allSpoken = wordList.length === originalSentence.length;
    return allMatched && allSpoken;
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

export const scrapedList = selector({
  key: 'scrapedList',
  get:
    ({ get }) =>
    async () => {
      const token = get(userToken);
      const response = await axios.get('/v1/phrases', {
        headers: {
          Authorization: token,
        },
      });

      const { data } = response;
      return data;
    },
});

export const scrapedListById = selectorFamily({
  key: 'scrapedListById',
  get:
    (param: number) =>
    ({ get }) =>
    async () => {
      const token = get(userToken);
      const url = `/v1/phrases/transcriptions/${param}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });
      const { data } = response;
      return data;
    },
});

export const formattedSelectedDateSelector = selector({
  key: 'formattedSelectedDateSelector',
  get: ({ get }) => {
    const selectedDate: SelectedDate = get(selectedDateState);
    return `${selectedDate.getFullYear()}.${String(selectedDate.getMonth() + 1).padStart(2, '0')}`;
  },
});
