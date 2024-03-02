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

export const audioUrlState = atom<string>({
  key: 'audioUrlState',
  default: null,
});

export const recordingState = atom<string>({
  key: 'recordingState',
  default: 'inactive',
});
