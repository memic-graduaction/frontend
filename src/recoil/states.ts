import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'localStorage',
  storage: localStorage,
});

export const scriptExpendState = atom<boolean>({
  key: 'scriptExpendState',
  default: false,
});

// 유튜브 url 링크
export const youtubeLinkState = atom<string>({
  key: 'youtubeLinkState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const youtubeIDstate = atom<string>({
  key: 'youtubeIDState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const currentTimeState = atom<string>({
  key: 'currentTimeState',
  default: '',
});

// audio blob 객체에 넣을 url
export const audioUrlState = atom<string>({
  key: 'audioUrlState',
  default: null,
});

// 사용자 음성 녹음 상태 'inactive' 'recording' 'loading' 'completed'
export const recordingState = atom<string>({
  key: 'recordingState',
  default: 'inactive',
});

// 사용자가 녹음하기를 선택한 문장
export const speechSentence = atom<string>({
  key: 'speechSentence',
  default: 'that we’ve had this morning that in the last hour a very powerful earthquake has struck',
});

// 사용자 음성 인식으루부터 추출된 문장
export const recognizedSentence = atom<string[]>({
  key: 'recognizedSentence',
  default: [
    'this',
    'we’ve',
    'had',
    'this',
    'money',
    'that',
    'in',
    'the',
    'last',
    'owl',
    'a',
    'very',
    'powerful',
    'earthquick',
    'has',
    'struck',
  ],
});
