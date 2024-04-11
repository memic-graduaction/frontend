import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ModalStateType } from './types';

const { persistAtom } = recoilPersist({
  key: 'localStorage',
  storage: localStorage,
});

export const modalActivationState = atom<boolean>({
  key: 'modalActivationState',
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

export const scriptIDstate = atom<number>({
  key: 'scriptIDstate',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const scriptSentencestate = atom<string>({
  key: 'scriptSentencestate',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const currentTimeState = atom({
  key: 'currentTimeState',
  default: '00:00:00',
});

export const youtubePlayerState = atom({
  key: 'youtubePlayerState',
  default: {
    startPoint: '00:00:00',
    sentence: '',
  },
});

// audio blob 객체에 넣을 url
export const audioUrlState = atom<string>({
  key: 'audioUrlState',
  default: null,
});

export const secondAudioUrl = atom<string>({
  key: 'secondAudioUrl',
  default: null,
});

// 사용자 음성 녹음 상태 'inactive' 'recording' 'loading' 'completed'
export const recordingState = atom<string>({
  key: 'recordingState',
  default: 'inactive',
});

// 사용자 음성 인식으로부터 추출된 문장
export const recognizedSentence = atom<string>({
  key: 'recognizedSentence',
  default: '',
});

// 모달 상태
export const modalStackState = atom<ModalStateType[]>({
  key: 'modalStackState',
  default: [],
});

export const menuState = atom<string>({
  key: 'menuState',
  default: 'Dashboard', 
});